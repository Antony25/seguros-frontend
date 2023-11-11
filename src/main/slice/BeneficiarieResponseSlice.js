import { createSlice } from '@reduxjs/toolkit';

export const BeneficiarySlice = createSlice({
    name: 'Beneficiary',
    initialState: {
        isLoadingDelete: false,
        successDelete:false,
        finishedDelete:false,
        errorMessageDelete: "",
        visible:false
    },
    reducers: {
        startFormB: (state, /* action */) => {

            state.visible = true;
        },
        endFormB: (state, /* action */) => {

            state.visible = false;
        },
        startLoadingBeneficiary: (state, /* action */) => {

            state.isLoading = true;
        },
        setBeneficiary: (state, action) => {
            state.successDelete= action.payload.success;
            state.errorMessageDelete  = action.payload.errorMessage;
            state.isLoadingDelete = false
            state.finishedDelete =true
            if(state.successDelete){
                state.visible = false

            }

           


        }
    }
});

export const { startLoadingBeneficiary, setBeneficiary, startFormB, endFormB } = BeneficiarySlice.actions;