import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
    const [values, handleInputChanGet] = useForm({
        email: '',
        password: '',
    });
    const handleLogin = (event) => {
        event.preventDefault();
    }
    console.log(values)
    return (
        <div className='aut__main'>
            <div className='auth__box-container'>
                <>
                    <h3 className='auth__title mb-5'>Login</h3>

                    <form onSubmit={handleLogin}>
                        <input
                            className={'auth__input'}
                            type={'text'}
                            autoComplete={'off'}
                            placeholder={'Email'}
                            name={'email'}
                            value={values.email}
                            onChange={handleInputChanGet}
                        />
                        <input
                            className={'auth__input'}
                            type={'password'}
                            autoComplete={'off'}
                            placeholder={'Password'}
                            name={'password'}
                            value={values.password}
                            onChange={handleInputChanGet}
                        />

                        <button
                            className='btn btn-primary btn-block'
                            type='submit'
                        >
                            Login
                        </button>

                        <div className='auth__social-networks'>
                            <p>Login whit social networks</p>
                            <div
                                className="google-btn"
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                    Sign in with google
                                </p>
                            </div>
                        </div>

                        <Link
                            to={'/register'}
                            className='link'
                        >
                            Create  new account
                        </Link>
                    </form>
                </>
            </div>
        </div>
    )
}
