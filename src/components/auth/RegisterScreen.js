import React from 'react'
import validator from "validator";
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux';

export const RegisterScreen = () => {

    const [values, handleInputChanGet] = useForm({
        name: 'juan',
        email: 'juan@gmail.com',
        password: '',
        passwordConfirm: '',
    });

    const { name, email, password, passwordConfirm } = values;

    const dispatch = useDispatch();

    const isFormValid = () => {
        if (name.trim().length === 0) {
            console.error('name is required')
            return false
        } else if (!validator.isEmail(email)) {
            console.error('email is not valid')
            return false
        }else if( password !== passwordConfirm || password.length < 5 ){
            console.error('Password  should  be at least 6 characters and match each other')
            return false 
        }
        return true
    }


    const handleRegister = (form) => {
        form.preventDefault()
        if (isFormValid()){ console.log('el formulario es correcto'); }
    }


    return (
        <div className='aut__main'>
            <div className='auth__box-container'>
                <>
                    <h3 className='auth__title mb-5'>Register</h3>
                    <form onSubmit={handleRegister}>
                        <div className='auth__alert-error'>

                        </div>
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
