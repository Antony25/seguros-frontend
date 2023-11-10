import { createSlice } from '@reduxjs/toolkit';

export const DetailsSlice = createSlice({
    name: 'Details',
    initialState: {
        options: [],
        isLoading: false,
        success:false,
        errorMessage: "",
        finished:false,
        items: 0
    },
    reducers: {
        startLoadingDetails: (state, /* action */) => {

            state.isLoading = true;
        },
        setDetails: (state, action) => {
            state.success= action.payload.success;
            if (state.success){
                state.options = action.payload.data;
                state.items =action.payload.data.count;
            }
            state.errorMessage  = action.payload.errorMessage;
            state.isLoading = false
            state.finished =true

           


        }, 
        restartInfo: (state, /* action */) => {

            state.options= []
            state.isLoading= false
            state.success=false
            state.errorMessage= ""
            state.finished=false
            state.items= 0
        },
    }
});

export const { startLoadingDetails, setDetails, restartInfo } = DetailsSlice.actions;