import { types } from "../type/types";


export const setError = (error) => ({
    type: types.uiSetError,
    payload: error,
})

export const removeErro = () => ({
    type: types.uiRemoveError,
}) 

export const startLoading = ()=>({
    type: types.uiStartLoading,
})

export const finishLoading =()=>({
    type: types.uiFinishLoading
})