import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { DashboardRoutes } from "./DashboardRoutes"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { NavBar } from "../ui/NavBar"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
          <NavBar />
          
      
            <Login/>
          </PublicRoutes>
        } />

<Route path='/register' element={
              <PublicRoutes>
              <NavBar />

                <Register/>
              </PublicRoutes>
            }/>

        <Route path='/*' element={
          <PrivateRoutes>
              {/* <NavBar /> */}

            <DashboardRoutes/>

          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  )
}
