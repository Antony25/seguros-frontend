import { createSlice } from '@reduxjs/toolkit';

export const AccountsSlice = createSlice({
    name: 'Accounts',
    initialState: {
        options: [],
        isLoading: false,
        success:false,
        errorMessage: "",
        items: 0
    },
    reducers: {
        startLoadingAccounts: (state, /* action */) => {

            state.isLoading = true;
        },
        setAccounts: (state, action) => {
            state.success= action.payload.success;
            if (state.success){
                state.options = action.payload.data.results;
                state.items =action.payload.data.count;
            }
            state.errorMessage  = action.payload.errorMessage;
            state.isLoading = false

           


        }
    }
});

export const { startLoadingAccounts, setAccounts } = AccountsSlice.actions;