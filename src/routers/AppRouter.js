import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { JournalScreen } from '../components/journal/JournalScreen'

export const AppRouter = () => {
    return (

        <Routes>

            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='*' element={<LoginScreen />} />

            <Route path='/' element={<JournalScreen />} />
        </Routes>

    )
}
