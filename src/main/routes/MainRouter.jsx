import { Navigate, Route, Routes } from "react-router-dom"
import { Main } from "../pages/Main"
import { Accounts } from "../pages/Accounts"
import { Details } from "../pages/Details"


export const MainRoutes = () => {
  return (
    <Routes>
       

       <Route path="/" element={<Main />}></Route>
                <Route path="accounts/" element={<Accounts />}></Route>
                <Route path="details/" element={<Details />}></Route>
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}