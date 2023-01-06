import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"


export const loadNotes = async(uid)=>{
    const docRef = collection(db,`${uid}`, 'journal', 'notes');
    const notesSnap = await getDocs(docRef);
    const notes = [];

    notesSnap.forEach( note =>{
        notes.push({
            id: note.id,
            ...note.data(),
        })
    })
    return notes;
}