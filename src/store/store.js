import { configureStore } from '@reduxjs/toolkit'
import { EmployesSlice } from '../main/slice/EmployesSlice'
import { AuthSlice } from '../login/slice/authSlide'
import { BeneficiariesSlice } from '../main/slice/BeneficiariesSlice'
import { BeneficiarySlice } from '../main/slice/BeneficiarieResponseSlice'
import { EmployeSlice } from '../main/slice/EmployesResponseSlice'
import { BeneficiaryUpdateSlice } from '../main/slice/BeneficiarieUpdateSlice'
import { EmployeUpdateSlice } from '../main/slice/EmployesUpdateSlice'

export const store = configureStore({
  reducer: {
    Auth: AuthSlice.reducer,
    Employes: EmployesSlice.reducer,
    Beneficiaries: BeneficiariesSlice.reducer,
    Beneficiary: BeneficiarySlice.reducer,
    BeneficiaryUpdate: BeneficiaryUpdateSlice.reducer,
    Employe: EmployeSlice.reducer,
    EmployeUpdate: EmployeUpdateSlice.reducer
  

  },
})