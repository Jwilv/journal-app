import Swal from 'sweetalert2'
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from '../type/types'
import { fileUpload } from '../helpers/fileUpload';


export const startNewNote = () => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const docRef = await addDoc(collection(db, `${uid}`, 'journal', 'notes'), newNote);
        dispatch(activeNote(docRef.id, newNote))
    }

}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    }
})

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
})

export const startLoudingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const refreshNote = (id, note)=>({
type:types.notesUpdate,
payload:{
    id,
    note,
}
})

export const startSaveNote = (notes) =>{
return async( dispatch, getState )=>{
    const { uid } = getState().auth;
    if(!notes.url){
        delete notes.url
    }
    const noteToFirestore = {...notes};
    delete noteToFirestore.id;
    await updateDoc(doc(db, `${uid}`, 'journal', 'notes', `${notes.id}`), noteToFirestore);
    dispatch(refreshNote(notes.id, {
        ...notes,
        date: new Date().getTime(),
    }))
    Swal.fire('Saved', notes.title, 'success')
}
}

export const startUploadingFile = (file)=>{
return async(dispatch, getState)=>{
    const {active:activeNote} = getState().notes;
    Swal.fire({
        title:'Uploading...',
        text:'Please wait',
        showConfirmButton: false,
        willOpen:()=>{
            Swal.showLoading();
        }
    })
    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    activeNote.date = new Date().getTime();
    dispatch(startSaveNote(activeNote));
    Swal.close();

}
}

export const startDeletingNote = (id)=>{
    return async(dispatch, getState)=>{
        const {uid} = getState().notes;
        await deleteDoc(doc(db, `${uid}`, 'journal', 'notes', `${id}`));
        dispatch();
    }
}