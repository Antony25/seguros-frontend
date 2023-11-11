import { Navigate, Route, Routes } from "react-router-dom"
import { Main } from "../pages/Main"
import { Beneficiario } from "../pages/Beneficiario"


export const MainRoutes = () => {
  return (
    <Routes>
       

       <Route path="/" element={<Main />}></Route>
        <Route path="beneficiarios/" element={<Beneficiario />}></Route>
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}