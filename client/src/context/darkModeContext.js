import { createContext, useEffect, useState } from "react"

export const DarkModeContext = createContext()

// children refer to child components within the context provider
export const DarkModeContextProvider = ({ children }) => {

    // checking localStorage for darkMode value, if doesn't exist assign false
    // using JSON parse to conver the string "true"/"false" to boolean
    const [darkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    const toggle = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode])

    // returning context provider which will surround the whole app
    // in order to pass the values down to child components
    return (
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            { children }
        </DarkModeContext.Provider>
    )
}