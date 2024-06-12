import React from 'react'
import { CurrentUserProvider } from '../contexts/CurrentUserContext'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


export default function LandingPage() {

    return (
        <CurrentUserProvider>
            <Navbar />
            <div className="py-10">
                <Outlet />
            </div>
        </CurrentUserProvider>
    )
}
