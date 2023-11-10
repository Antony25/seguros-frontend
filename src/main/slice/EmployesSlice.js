import { createSlice } from '@reduxjs/toolkit';

export const EmployesSlice = createSlice({
    name: 'Employes',
    initialState: {
        options: [],
        isLoading: false,
        success:false,
        errorMessage: "",
        items: 0
    },
    reducers: {
        startLoadingEmployes: (state, /* action */) => {

            state.isLoading = true;
        },
        setEmployes: (state, action) => {
            state.options = action.payload.data;
            state.success= action.payload.success;
            state.errorMessage  = action.payload.errorMessage;
            state.items =action.payload.data.count;
            state.isLoading = false

           


        }
    }
});

export const { startLoadingEmployes, setEmployes } = EmployesSlice.actions;