import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from '../type/types'


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
        console.log(docRef);
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

export const startSaveNote = (notes) =>{
return async( dispatch, getState )=>{
    const { uid } = getState().auth;
    const noteToFirestore = {...notes};
    delete noteToFirestore.id;
    await updateDoc(collection(db, `${uid}`, 'journal', 'notes', `${notes.id}`), noteToFirestore);
}
}