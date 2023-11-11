import { createSlice } from '@reduxjs/toolkit';

export const BeneficiariesSlice = createSlice({
    name: 'Beneficiaries',
    initialState: {
        options: [],
        isLoading: false,
        success:false,
        errorMessage: "",
        items: 0
    },
    reducers: {
        startLoadingBeneficiaries: (state, /* action */) => {

            state.isLoading = true;
        },
        setBeneficiaries: (state, action) => {
            state.options = action.payload.data;
            state.success= action.payload.success;
            state.errorMessage  = action.payload.message;
            state.items =action.payload.data.count;
            state.isLoading = false

           


        }
    }
});

export const { startLoadingBeneficiaries, setBeneficiaries } = BeneficiariesSlice.actions;