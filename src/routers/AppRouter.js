import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { login } from '../actions/auth'
import { startLoudinNotes } from '../actions/notes'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { JournalScreen } from '../components/journal/JournalScreen'
import { LoudingScreen } from '../components/Louding/LoudingScreen'
import { auth } from '../firebase/firebase-config'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [cheking, setCheking] = useState(true)
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, async(user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLogged(true)
                dispatch(startLoudinNotes(user.uid));
            } else {
                setIsLogged(false)
            }
            setCheking(false)
        })
    }, [dispatch])

    if (cheking) {
        return <LoudingScreen />
    }

    return (

        <Routes>
            <Route path='/login' element={
                <PublicRouter logged={isLogged} >
                    <LoginScreen />
                </PublicRouter>}
            />
            <Route path='/register' element={
                <PublicRouter logged={isLogged} >
                    <RegisterScreen />
                </PublicRouter>}
            />
            <Route path='*' element={
                <PublicRouter logged={isLogged} >
                    <LoginScreen />
                </PublicRouter>}
            />
            <Route path='/' element={
                <PrivateRouter logged={isLogged} >
                    <JournalScreen />
                </PrivateRouter>}
            />
        </Routes>
    )
}
