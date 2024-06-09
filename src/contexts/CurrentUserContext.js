import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    // network request to see who's logged in using cookies
    const handleMount = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/dj-rest-auth/user/")
            setCurrentUser(data)
        } catch (err) {
            console.log(err)
        }
    }
    // makes code run when the component mounts
    useEffect(() => {
        handleMount();
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    )
}