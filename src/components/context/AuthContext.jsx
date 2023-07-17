import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    
    const handleAuth = (data,valor) => {
        setAuth(data);
    
    }

    const handleLogout = () => {
        setAuth(null)
    }

    const data = { auth, setAuth, handleAuth, handleLogout };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;