import Swal from 'sweetalert2'

import { signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth, googleAuthProvider, signup } from "../firebase/firebase-config";
import { types } from "../type/types";
import { finishLoading, startLoading } from "./ui";
import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading());
            })
            .catch(error => {
                Swal.fire('Erro', error.message, 'error');
                dispatch(finishLoading());
            })

    }
}

export const startRegisterwithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        signup(email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => {
                Swal.fire('Erro', error.message, 'error');
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        googleAuthProvider()
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => {
                Swal.fire('Erro', error.message, 'error');
            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);
        dispatch(logout());
        dispatch(noteLogout())
    }
}

export const logout = () => ({
    type: types.logout
})