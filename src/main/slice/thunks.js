import { getAccountsService, getEmployesService, getDetailsService, getBeneficiariesService, deleteEmployesService, deleteBeneficiarieService, addEmployesService, addBeneficiariesService } from "../api/providers"
import { setBeneficiary, startLoadingBeneficiary } from "./BeneficiarieResponseSlice"
import { setBeneficiaries, startLoadingBeneficiaries } from "./BeneficiariesSlice"
import { setEmploye, startLoadingEmploye } from "./EmployesResponseSlice"

import { setEmployes, startLoadingEmployes } from "./EmployesSlice"








export const getEmployes= () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingEmployes())
        const response = await getEmployesService()
        
        dispatch(setEmployes(response))
    }

}
export const deleteEmploye= (id) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingEmploye())
        const response = await deleteEmployesService(id)
        console.log(response)
        
        dispatch(setEmploye(response))
        dispatch(getEmployes())
    }

}

export const addEmploye= (data) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingEmploye())
        const response = await addEmployesService(data)
        console.log(response)
        
        dispatch(setEmploye(response))
        dispatch(getEmployes())
    }

}

export const getBeneficiaries= (id_employe) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingBeneficiaries())
        const response = await getBeneficiariesService(id_employe)
        
        dispatch(setBeneficiaries(response))
    }

}

export const deleteBeneficiarie= (id, empleado) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingBeneficiary())
        const response = await deleteBeneficiarieService(id)
        
        dispatch(setBeneficiary(response))
        dispatch(getBeneficiaries(empleado))
    }
}

export const addBeneficiary= (data) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingBeneficiary())
        const response = await addBeneficiariesService(data)
        console.log(response)
        
        dispatch(setBeneficiary(response))
        dispatch(getBeneficiaries(data.empleado))
    }

}