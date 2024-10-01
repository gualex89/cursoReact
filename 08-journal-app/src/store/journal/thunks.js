export const starNewNote = () => {
  return async (dispatch, getState) => {
    // uid
    const {uid} = getState().auth;

    

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    // dispatch

    // dispatch (new Note)
    // dispatch (activeNote)
  }
}