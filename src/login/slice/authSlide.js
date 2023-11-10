import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        status: 'No Authenticado',
        uid: null,
        email:null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state,  {payload} ) => {
            state.status= 'Authenticado'
            state.uid= payload.uid
            state.email=payload.email
            state.displayName= payload.displayName
            state.photoURL= payload.photoURL
            state.errorMessage =null
        },
        logout: (state, {payload}) => {
            state.status= 'No Authenticado'
            state.uid= null
            state.email=null
            state.displayName= null
            state.photoURL= null
            state.errorMessage= payload.errorMessage

           


        },
        checkingCredentias:(state,  action ) => {
            state.status ='checking'
        }

    }
});

export const { login, logout, checkingCredentias } = AuthSlice.actions;