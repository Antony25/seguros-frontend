import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="register/" element={<Register />}></Route>
        <Route path="login/" element={<Login />}></Route>

        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}