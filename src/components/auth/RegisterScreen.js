import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {
    return (
        <div className='aut__main'>
            <div className='auth__box-container'>
                <>
                    <h3 className='auth__title mb-5'>Register</h3>
                    <form>
                        <input
                            type={'text'}
                            autoComplete={'off'}
                            placeholder={'Name'}
                            name={'name'}
                            className={'auth__input'}
                        />
                        <input
                            type={'text'}
                            autoComplete={'off'}
                            placeholder={'Email'}
                            name={'email'}
                            className={'auth__input'}
                        />
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            placeholder={'Password'}
                            name={'password'}
                            className={'auth__input'}
                        />
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            placeholder={'Confirm password'}
                            name={'confirm'}
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
