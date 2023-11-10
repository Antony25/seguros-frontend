import {  Navigate, Route, Routes } from "react-router-dom"

import { useSelector } from "react-redux"
import { MainRoutes } from "../main/routes/MainRouter"
import { AuthRoutes } from "../login/routes/AuthRoutes"




export const AppRouter = () => {

    const {status} =  useSelector(state=>state.Auth)
    return (
        <>

            <Routes>
{                  (true || status==="Authenticado")
              ? <Route path="/*" element={ <MainRoutes /> } />
              : <Route path="/auth/*" element={ <AuthRoutes /> } />


            }
            <Route path='/*' element={<Navigate to='auth/login/'/>} />
            </Routes>
        </>
    )
}