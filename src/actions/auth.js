import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../type/types";

export const startLoginEmailPassword = (Email, Password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(Email, Password))
        }, 3500)
    }
}

export const startGoogleLogin = () => {
    return async(dispatch) => {
        await googleAuthProvider()
        .then( userCred =>{
            console.log(userCred)
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