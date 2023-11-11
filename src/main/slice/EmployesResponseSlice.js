import { createSlice } from '@reduxjs/toolkit';

export const EmployeSlice = createSlice({
    name: 'Employe',
    initialState: {
        isLoadingDelete: false,
        successDelete:false,
        finishedDelete:false,
        errorMessageDelete: "",
        visible:false
    },
    reducers: {
        startForm: (state, /* action */) => {

            state.visible = true;
        },
        endForm: (state, /* action */) => {

            state.visible = false;
        },
        startLoadingEmploye: (state, /* action */) => {

            state.isLoading = true;
        },
        setEmploye: (state, action) => {
            state.successDelete= action.payload.success;
            if (state.successDelete){
                state.visible =false}
            state.errorMessageDelete  = action.payload.errorMessage;
            state.isLoadingDelete = false
            state.finishedDelete =true

           


        }
    }
});

export const { startLoadingEmploye, setEmploye, startForm , endForm} = EmployeSlice.actions;