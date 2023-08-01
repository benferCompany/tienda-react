import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    let autentication = "";
    if (localStorage.getItem('auth')) {
        autentication = { "access_token": localStorage.getItem('auth') };

    }
    const [auth, setAuth] = useState(autentication);

    const handleAuth = (data) => {

        if (data) {
            setAuth(data);
            localStorage.setItem('auth', data.access_token)
        }

    }

    const handleLogout = () => {
        setAuth(null)
        localStorage.removeItem('auth')
    }

    const data = { auth, setAuth, handleAuth, handleLogout };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;