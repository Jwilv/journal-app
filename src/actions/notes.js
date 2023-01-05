

export const startNewNote = ()=>{

return ( dispatch, getState)=>{
    const {uid} = getState().auth;
    console.log(uid)
}

}