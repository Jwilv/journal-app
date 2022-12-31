import { types } from "../type/types";

export const startLoginEmailPassword = (Email, Password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(Email, Password))
        }, 3500)
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})