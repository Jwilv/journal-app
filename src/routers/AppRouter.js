import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { login } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { JournalScreen } from '../components/journal/JournalScreen'
import { auth } from '../firebase/firebase-config'

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
            }
        })
    }, [])

    return (

        <Routes>

            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='*' element={<LoginScreen />} />

            <Route path='/' element={<JournalScreen />} />
        </Routes>

    )
}
