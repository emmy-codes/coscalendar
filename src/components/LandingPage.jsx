import React, { useEffect } from "react"
import { CurrentUserProvider } from "../contexts/CurrentUserContext"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function LandingPage() {

    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname == "/") {
            navigate("/home")
        }
    }, [])

    return (
        <CurrentUserProvider>
            <Navbar />
            <div className="py-10">
                <Outlet />
            </div>
        </CurrentUserProvider>
    )
}
