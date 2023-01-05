import { async } from "@firebase/util";
import { collection, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase-config"


export const loadNotes = async(uid)=>{
    const docRef = collection(db,`${uid}`, 'journal', 'notes');
    const notesSnap = await getDoc(docRef);
    console.log(notesSnap);
}