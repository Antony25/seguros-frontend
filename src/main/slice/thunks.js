import { getAccountsService, getEmployesService, getDetailsService } from "../api/providers"
import { setAccounts, startLoadingAccounts } from "./AccountsSlice"
import { setDetails, startLoadingDetails } from "./DetailsSlice"
import { setEmployes, startLoadingEmployes } from "./EmployesSlice"







export const getAccounts= (uuid) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingAccounts())
        const response = await getAccountsService(uuid)
        
        dispatch(setAccounts(response))
    }

}






export const getEmployes= () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingEmployes())
        const response = await getEmployesService()
        
        dispatch(setEmployes(response))
    }

}

export const getDetails= (link, account) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingDetails())
        const response = await getDetailsService(link, account)
        
        dispatch(setDetails(response))
    }

}