import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser ] = useState('Client')

    return (
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    )
}


export const UserAuth = () => {

    return useContext(AuthContext)
}