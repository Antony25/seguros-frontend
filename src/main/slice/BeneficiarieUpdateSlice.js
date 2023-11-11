import { createSlice } from '@reduxjs/toolkit';

export const BeneficiaryUpdateSlice = createSlice({
    name: 'BeneficiaryUpdate',
    initialState: {
        isLoadingDelete: false,
        successDelete:false,
        finishedDelete:false,
        errorMessageDelete: "",
        visible:false,
        item:{},
    },
    reducers: {
        setItemBU: (state,  action) => {

            state.item = action.payload;
        },
        startFormBU: (state, /* action */) => {

            state.visible = true;
        },
        endFormBU: (state, /* action */) => {

            state.visible = false;
        },
        startLoadingBeneficiaryUpdate: (state, /* action */) => {

            state.isLoading = true;
        },
        setBeneficiaryUpdate: (state, action) => {
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

export const { startLoadingBeneficiaryUpdate, setBeneficiaryUpdate, startFormBU, endFormBU, setItemBU } = BeneficiaryUpdateSlice.actions;