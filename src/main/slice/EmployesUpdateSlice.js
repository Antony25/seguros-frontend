import { createSlice } from '@reduxjs/toolkit';

export const EmployeUpdateSlice = createSlice({
    name: 'EmployeUpdate',
    initialState: {
        isLoadingDelete: false,
        successDelete:false,
        finishedDelete:false,
        errorMessageDelete: "",
        visible:false, 
        item: {}
    },
    reducers: {
        setItemEmployeUpdate: (state,  action) => {

            state.item = action.payload;
        },
        startForm: (state, /* action */) => {

            state.visible = true;
        },
        endForm: (state, /* action */) => {

            state.visible = false;
        },
        startLoadingEmployeUpdate: (state, /* action */) => {

            state.isLoading = true;
        },
        setEmployeUpdate: (state, action) => {
            state.successDelete= action.payload.success;
            if (state.successDelete){
                state.visible =false}
            state.errorMessageDelete  = action.payload.errorMessage;
            state.isLoadingDelete = false
            state.finishedDelete =true

           


        }
    }
});

export const { startLoadingEmployeUpdate, setEmployeUpdate, startForm , endForm, setItemEmployeUpdate} = EmployeUpdateSlice.actions;