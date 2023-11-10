import { apiSettings } from "../../api/ApiSettings";

export const getLinkUUIDService = async (name) => {
    let success = false;
    let errorMessage = "";
    let data = {}
    try {



        const response = await apiSettings.get(`/api/links/?page=1&institution=${name}`);
        //const response = await apiSettings.get(`api/institutions/?page=${page}&type=${type}&status=${status}&country_code=${country_code}`);
        if (response.status === 200) {
            success = true
            errorMessage = "Proceso realizado de manera exitosa"
            data = response?.data?.results;


        } else {
            errorMessage = "Ocurrio un error durante la creacion"
            errorMessage = JSON.stringify(response.data);
        }
    } catch (error) {
        try {
            errorMessage = JSON.stringify(error.response.data);
        }
        catch (e) {

            errorMessage = error.message
        }
    }
    return { success, errorMessage, data }
}

export const getAccountsService = async (uuid) => {
    let success = false;
    let errorMessage = "";
    let data = {}
    try {



        const response = await apiSettings.get(`api/accounts/?page=1&link=${uuid}`);
        //const response = await apiSettings.get(`api/institutions/?page=${page}&type=${type}&status=${status}&country_code=${country_code}`);
        if (response.status === 200) {
            success = true
            errorMessage = "Proceso realizado de manera exitosa"
            data = response?.data;


        } else {
            errorMessage = "Ocurrio un error durante la creacion"
            errorMessage = JSON.stringify(response.data);
        }
    } catch (error) {
        try {
            errorMessage = JSON.stringify(error.response.data);
        }
        catch (e) {

            errorMessage = error.message
        }
    }
    return { success, errorMessage, data }
}


export const getEmployesService = async () => {
    let success = false;
    let errorMessage = "";
    let data = {}
    try {



        const response = await apiSettings.get(`/empleados_procedure/`);
        console.log(response)
        if (response.status === 200) {
            success = true
            errorMessage = "Proceso realizado de manera exitosa"
            data = response.data;


        } else {
            //errorMessage = "Ocurrio un error durante la creacion"
            errorMessage = JSON.stringify(response.data);
        }
    } catch (error) {
        try {
            errorMessage = JSON.stringify(error.response.data);
        }
        catch (e) {

            errorMessage = error.message
        }
    }
    return { success, errorMessage, data }
}

export const getDetailsService = async (link, account) => {
    let success = false;
    let errorMessage = "";
    let data = {}
    try {

        let body = {
            "link": link,
            "date_from": "2020-01-01",
            "date_to": "2023-10-01",
            "account": account

        }



        const response = await apiSettings.post(`api/transactions/`, body);
        //const response = await apiSettings.get(`api/institutions/?page=${page}&type=${type}&status=${status}&country_code=${country_code}`);
        if (response.status === 201) {
            success = true
            errorMessage = "Proceso realizado de manera exitosa"
            data = response?.data;


        } else {
            errorMessage = "Ocurrio un error durante la creacion"
            errorMessage = JSON.stringify(response.data);
        }
    } catch (error) {
        try {
            errorMessage = JSON.stringify(error.response.data);
        }
        catch (e) {

            errorMessage = error.message
        }
    }
    return { success, errorMessage, data }
}