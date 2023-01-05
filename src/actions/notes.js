

export const startNewNote = ()=>{

return ( dispatch, getState)=>{
    const uid = getState().auth.uid;
    console.log(uid)
}

}