import React from "react";
import { createContext, useState } from "react";

export const StatusContext = createContext()

const StatusContextProvider = (props) => {

    const [isLogedIn, setLogedIn] = useState(true)

    const toggleLogin = () => {
        setLogedIn(!isLogedIn)
    }


    return(
        <StatusContext.Provider value={{isLogedIn, toggleLogin}} >
            {props.children}
        </StatusContext.Provider>
    )
}

export default StatusContextProvider