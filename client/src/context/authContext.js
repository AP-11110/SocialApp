import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {


    const [currentUser, setCurrentUser ] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        // to do
        setCurrentUser({
            id: 1,
            name: "Arturas",
            profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        });
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