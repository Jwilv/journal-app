import { types } from "../type/types";

export const startLoginEmailPassword = (Email, Password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'juancete'))
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