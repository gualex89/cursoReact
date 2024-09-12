import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auths',
  initialState: {
    status: 'not-authenticated', //'checking','not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    erroMessage: null

  },
  reducers: {
    login:(state, {payload}) => {
      state.status= 'authenticated', //'checking','not-authenticated', 'authenticated'
      state.uid= payload.uid,
      state.email= payload.email,
      state.displayName= payload.displayName,
      state.photoURL= payload.photoURL
      state.erroMessage= null
    },
    logout: (state, {payload})=>{
      state.status= 'not-authenticated', //'checking','not-authenticated', 'authenticated'
      state.uid= null,
      state.email= null,
      state.displayName= null,
      state.photoURL= null,
      state.erroMessage= payload.errorMessage

    },
    checkingCredentials: (state) => {
        state.status = 'checking'
    }

  }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;