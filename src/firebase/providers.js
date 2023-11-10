import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials =  GoogleAuthProvider.credentialFromResult(result);
        //console.log({credentials})
        const { displayName, email, photoURL, uid } = result.user;
        return {
            success: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        console.log(error)
        return {success:false,
        errorMessage: error.message}
    }
}


export const registerUserWithEmailPassowrd = async ({mail, password, name})=>{

    try {
         const  response =await createUserWithEmailAndPassword(FirebaseAuth, mail, password)
         await updateProfile(FirebaseAuth.currentUser, {displayName:name})
         const { displayName, email, photoURL, uid } = response.user;
         
         return {
             success: true,
             displayName,
             email,
             photoURL,
             uid
         }
    } catch (error) {
        console.log(error)
        return {success:false,
        errorMessage: error.message}
    }
}

export const loginUserWithEmailPassowrd = async ({mail, password })=>{

    try {
         const  response =await signInWithEmailAndPassword(FirebaseAuth, mail, password)
         const { displayName, email, photoURL, uid } = response.user;
         
         return {
             success: true,
             displayName,
             email,
             photoURL,
             uid
         }
    } catch (error) {
        console.log(error)
        return {success:false,
        errorMessage: error.message}
    }
}