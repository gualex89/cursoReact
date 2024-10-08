import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./";
import { loadNotes } from "../../helpers";
import { Notes } from "@mui/icons-material";

export const starNewNote = () => {
  return async (dispatch, getState) => {

    dispatch(savingNewNote())
    // uid
    const {uid} = getState().auth;
    
    

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc (collection(FirebaseDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    dispatch( addNewEmptyNote(newNote))
    dispatch( setActiveNote(newNote))
     
    // dispatch (new Note)
    // dispatch (activeNote)
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes))
  }

}

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving());

    const {uid} = getState().auth;
    const {active: note} = getState().journal;

    const noteToFireStore = {...note};
    delete noteToFireStore.id

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}` )
    await setDoc(docRef, noteToFireStore, {merge:true})

    dispatch (updateNote (note))


  }
}