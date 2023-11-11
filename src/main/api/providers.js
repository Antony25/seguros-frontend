import { apiSettings } from "../../api/ApiSettings";



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

export const deleteEmployesService = async (id) => {
    let success = false;
    let errorMessage = "";
    let data = {}
    try {



        const response = await apiSettings.delete(`/empleados_procedure/${id}/`);
        console.log(response)
        if (response.status === 204) {
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

export const addEmployesService = async (data) => {
    let success = false;
    let errorMessage = "";
    try {
    


        const response = await apiSettings.post(`/empleados_procedure/`, data);
        console.log(response)
        if (response.status === 201) {
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


export const updateEmployesService = async (data, id) => {
    let success = false;
    let errorMessage = "";
    try {
        let payload =
            {
                "nombre": data.nombre,
                "apellidos": data.apellidos,
                "fecha_nacimiento": data.fecha_nacimiento,
                "numero_empleado": data.numero_empleado,
                "curp": data.curp,
                "ssn": data.ssn,
                "numero_telefono": data.numero_empleado,
                "nacionalidad": data.nacionalidad
            }
    


        const response = await apiSettings.post(`/empleados_procedure/${id}/`, payload);
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

export const getBeneficiariesService = async (id) => {
    let success = false;
    let errorMessage = "";
    let data = {}
    try {



        const response = await apiSettings.get(`/beneficiarios_procedure/?id_empleado=${id}`);
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
export const deleteBeneficiarieService = async (id) => {
    let success = false;
    let errorMessage = "";
    let data = {}
    try {



        const response = await apiSettings.delete(`/beneficiarios_procedure/${id}/`);
        console.log(response)
        if (response.status === 204) {
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

export const addBeneficiariesService = async (data) => {
    let success = false;
    let errorMessage = "";
    try {
    


        const response = await apiSettings.post(`/beneficiarios_procedure/`, data);
        console.log(response)
        if (response.status === 201) {
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
