import { configureStore } from '@reduxjs/toolkit'
import { EmployesSlice } from '../main/slice/EmployesSlice'
import { AccountsSlice } from '../main/slice/AccountsSlice'
import { DetailsSlice } from '../main/slice/DetailsSlice'
import { AuthSlice } from '../login/slice/authSlide'

export const store = configureStore({
  reducer: {
    Auth: AuthSlice.reducer,
    Employes: EmployesSlice.reducer,
    Accounts: AccountsSlice.reducer,
    Details: DetailsSlice.reducer,
    

  },
})