import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {


    const [currentUser, setCurrentUser ] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (inputs) => {
        
        // withCredentials() makes browser include cookies and authentication headers in XHR request  
        const res = await axios.post("/auth/login", inputs, {
            withCredentials: true // due to cookies
        });

        setCurrentUser(res.data);
    }

    // using stringify as objects cannot be stored in local storage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

  
    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            { children }
        </AuthContext.Provider>
    )
}