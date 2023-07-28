import { Link } from "react-router-dom";

const UserAdmin = () => {
    return (
        <>
            <div className="bg-dark text-white p-2 text-center">
                <h2>Panel de administrador</h2>
            </div>

            <table className="table table-striped table-dark text-center table-bordered">


                <tbody>
                    <tr scope="row">
                        <td><Link to="/createProduct" className="btn btn-success me-1">Crear Producto</Link>
                        </td>
                        <td><Link to="/createProduct" className="btn btn-danger me-1">Eliminar Producto</Link>
                        </td>
                        <td><Link to="/productEdit" className="btn btn-warning me-1">Editar Producto</Link>
                        </td>
                        <td><Link to="/createuseradmin" className="btn btn-success me-1">Crear usuario administrador</Link>
                        </td>




                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default UserAdmin;