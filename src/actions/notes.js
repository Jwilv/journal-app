import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import {types} from '../type/types'


export const startNewNote = () => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const docRef  = await setDoc(doc(collection(db, `${uid}`, "JOURNAL", 'NOTES')), newNote);
        dispatch(activeNote(docRef.id, newNote))
    }

}

export const activeNote = (id, note)=>({
    type:types.notesActive,
    payload:{
        id,
        ...note,
    }
})