import { useContext, useEffect, useState } from "react"
import AuthContext from "../components/context/AuthContext"
import axios from "axios";

const useAuth = () => {
    const { auth } = useContext(AuthContext)

    const [isAdmin, setIsAdmin] = useState(false);

        const config = {
            headers: {
                'Authorization': `Bearer ${auth.access_token}` // Aquí agregamos el token al encabezado
            }
        };
        useEffect(()=>{
            axios.get(`https://api.escuelajs.co/api/v1/auth/profile/`, config)
            .then((response) => {
                setIsAdmin(response.data.role=="admin"?true:false);

            })
            .catch((error) => {
                console.error('Error al autentica el usuario', error);
            });

        },[])
       
    return { isAdmin };

}

export default useAuth;