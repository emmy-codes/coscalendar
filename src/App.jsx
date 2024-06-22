import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import React from "react"
import Calendar from "./components/Calendar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import UserProfile from "./components/UserProfile"
import ExpensesList from "./components/ExpensesList"
import Page404 from "./components/Page404"
import Home from "./components/Home"
import LandingPage from "./components/LandingPage"
import CosPlanForm from "./components/CosPlanForm"
import Footer from "./components/Footer"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<LandingPage />} >
        <Route path="/home" element={<Home />} />
        <Route path="/cosplan/new" element={<CosPlanForm />} />
        <Route path="/cosplan/edit/:id" element={<CosPlanForm />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/cosplan/:id/expenses" element={<ExpensesList />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  )
  return (
    <div className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
