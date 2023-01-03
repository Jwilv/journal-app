import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, googleAuthProvider, signup } from "../firebase/firebase-config";
import { types } from "../type/types";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, email, password)
        .then( ({user})=>{
            dispatch(login(user.uid, user.displayName))
        })
        .catch( error => console.log(error))
        
    }
}

export const startRegisterwithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        signup(email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => console.log(e))
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        googleAuthProvider()
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
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