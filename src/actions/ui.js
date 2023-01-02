import { types } from "../type/types";


export const setError = (error) => ({
    type: types.uiSetError,
    payload: error,
})

export const removeErro = () => ({
    type: types.uiRemoveError,
}) 