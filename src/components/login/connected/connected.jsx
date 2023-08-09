import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useGetHeader from "../../../hook/useGetHeader";
import { Link } from "react-router-dom";
import UserAdmin from "./user_admin/UserAdmin"


const Connected = () => {
    const { auth, handleLogout } = useContext(AuthContext);
    const { data } = useGetHeader("https://api.escuelajs.co/api/v1/auth/profile", "login", auth.access_token)

    return (
        <div className="">
            <table className="table table-striped table-dark text-center table-bordered m-0">
                <thead>

                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Actividad</th>
                    </tr>
                </thead>
                {data && <tbody>
                    <tr scope="row">
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.role}</td>
                        <td>
                            <Link onClick={() => { handleLogout() }} to="/login" className="btn btn-danger ms-1">Cerrar Sesion</Link>
                        </td>
                    </tr>
                </tbody>}


            </table>
            {data && data.role === "admin" &&
                <UserAdmin/>
            }

        </div>
    )
}

export default Connected;