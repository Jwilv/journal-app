import React from 'react'
import validator from "validator";
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { removeErro, setError } from '../../actions/ui';
import { startRegisterwithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const [values, handleInputChanGet] = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const { name, email, password, passwordConfirm } = values;

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('name is required'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('email is not valid'))
            return false
        } else if (password !== passwordConfirm || password.length < 5) {
            dispatch(setError('Password  should  be at least 6 characters and match each other'))
            return false
        }
        dispatch(removeErro())
        return true
    }


    const handleRegister = (form) => {
        form.preventDefault()
        if (isFormValid()) { dispatch(startRegisterwithEmailPasswordName(email,password,name)) }
    }


    return (
        <div className='aut__main'>
            <div className='auth__box-container'>
                <>
                    <h3 className='auth__title mb-5'>Register</h3>
                    <form 
                    onSubmit={handleRegister}
                    className='animate__animated animate__fadeIn animate__faster'
                    >
                        {
                            msgError && (<div className='auth__alert-error'>
                                {msgError}
                            </div>)
                        }
                        <input
                            type={'text'}
                            autoComplete={'off'}
                            placeholder={'Name'}
                            name={'name'}
                            value={name}
                            onChange={handleInputChanGet}
                            className={'auth__input'}
                        />
                        <input
                            type={'text'}
                            autoComplete={'off'}
                            placeholder={'Email'}
                            name={'email'}
                            value={email}
                            onChange={handleInputChanGet}
                            className={'auth__input'}
                        />
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            placeholder={'Password'}
                            name={'password'}
                            value={password}
                            onChange={handleInputChanGet}
                            className={'auth__input'}
                        />
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            placeholder={'Confirm password'}
                            name={'passwordConfirm'}
                            value={passwordConfirm}
                            onChange={handleInputChanGet}
                            className={'auth__input'}
                        />
                        <button
                            className='btn btn-primary btn-block mb-5'
                            type='submit'
                        >
                            Register
                        </button>
                        <Link
                            to={'/login'}
                            className='link'
                        >
                            Alredy registered?
                        </Link>
                    </form>
                </>
            </div>
        </div>
    )
}
