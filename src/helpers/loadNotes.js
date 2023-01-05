import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"


export const loadNotes = async(uid)=>{
    const docRef = collection(db,`${uid}`, 'journal', 'notes');
    const notesSnap = await getDocs(docRef);
    console.log(notesSnap);
}