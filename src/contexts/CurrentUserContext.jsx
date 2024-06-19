import { useState, useEffect, createContext, useContext, useMemo } from "react"
import axios from "axios"
import { axiosReq } from "../api/axiosDefaults"
import { useNavigate } from "react-router-dom"
import { getCookie } from "../utils/utils"


export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()

export const useCurrentUser = () => useContext(CurrentUserContext)
export const useSetCurrentUser = () => useContext(SetCurrentUserContext)

export const CurrentUserProvider = ({ children }) => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState(null)
    // network request to see who's logged in using cookies

    const handleMount = async () => {
        try {
            const { data } = await axiosReq.get("/dj-rest-auth/user/")
            setCurrentUser(data)
        } catch (err) {
            // Handle errors, potentially check for 401 here if needed
            console.error("Error fetching user data:", err.response?.data)
        }
    }


    useMemo(() => {
        axiosReq.interceptors.request.use(
            (config) => {
                const token = getCookie("my-app-auth")
                if (token) {
                    config.headers["Authorization"] = `Bearer ${token.split("=")[1]}`
                    config.headers["X-CSRFToken"] = getCookie("csrftoken")
                }
                return config
            },
            (err) => {
                return Promise.reject(err)
            }
        )

        axiosReq.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config

                // Check if the refresh request itself failed
                if (error.response?.status === 401 && originalRequest?.url === "/dj-rest-auth/token/refresh/") {
                    // Refresh token has also expired, log user out
                    console.log("Refresh token error:", error)
                    setCurrentUser(null)
                    navigate("/login") // Navigate to login on failure
                    return Promise.reject(error)
                }

                // Check if the token is invalid and needs refreshing
                if (error.response?.data?.code === "token_not_valid" &&
                    error.response?.status === 401 &&
                    !originalRequest._retry) {

                    originalRequest._retry = true // Prevent infinite loop
                    try {
                        // Attempt to refresh the token
                        const response = await axiosReq.post("/dj-rest-auth/token/refresh/")
                        setCurrentUser(response.data.user) // Update the user data
                        return axios(originalRequest)
                    } catch (_error) {
                        // Handle any potential errors during the refresh attempt
                        console.error("Refresh token error:", _error)
                        // If refreshing also fails, log out the user
                        setCurrentUser(null)
                        navigate("/login") // Navigate to login on failure
                        return Promise.reject(_error)
                    }
                }
                return Promise.reject(error)
            })
    }, [navigate])

    useEffect(() => {
        handleMount()
    }, [])
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    )
}