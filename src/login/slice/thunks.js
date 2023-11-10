import { loginUserWithEmailPassowrd, registerUserWithEmailPassowrd, singInWithGoogle } from "../../firebase/providers"
import { checkingCredentias, login, logout } from "./authSlide";

export const signInGoogle= () => {
    return async (dispatch) => {
        dispatch(checkingCredentias())
        const result = await singInWithGoogle();
        if (result.success){
            dispatch(login(result))
        }else{

            dispatch(logout(result))
        }

    }

}

export const registerUserPassword= ({mail, password, name}) => {
    return async (dispatch) => {
        dispatch(checkingCredentias())
        const result = await registerUserWithEmailPassowrd({mail, password, name});
        if (result.success){
            dispatch(login(result))
        }else{

            dispatch(logout(result))
        }

    }

}

export const loginUserPassword= ({mail, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentias())
        const result = await loginUserWithEmailPassowrd({mail, password});
        if (result.success){
            dispatch(login(result))
        }else{

            dispatch(logout(result))
        }

    }

}