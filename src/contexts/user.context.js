import { createContext, useState } from "react";


// as the acutal value to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})


// provider
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    return <UserContext.Provider
        value={value}
    >
        {children}
    </UserContext.Provider>
}

