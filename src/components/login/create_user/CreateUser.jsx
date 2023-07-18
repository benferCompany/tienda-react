import { Link } from "react-router-dom";
import usePostData from "../../../hook/usePostData";

const CreateUser = () => {
    const { error, success, dataMutation, handleOnSubmit, handleInputChange } = usePostData("https://api.escuelajs.co/api/v1/users");

    if (success) {
        console.log(dataMutation.data)
        return (
            <div>
                <table className="table table-dark table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{dataMutation.data.name}</td>
                            <td>{dataMutation.data.email}</td>
                            <td>{dataMutation.data.role}</td>

                        </tr>
                    </tbody>
                </table>
                <div className="d-flex">
                    <h2>Felicidades ahora ya puedes Iniciar sesion</h2>

                    <Link to="/login" className="btn btn-success">Login</Link>

                </div>
            </div>
        )

    }




    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleOnSubmit} className="w-25">
                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input name="email" onChange={handleInputChange} type="email" className="form-control" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input name="password" onChange={handleInputChange} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input name="name" onChange={handleInputChange} type="text" className="form-control" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Url de una foto para tu perfil</label>
                    <input name="avatar" onChange={handleInputChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Seleccione un rol</label>
                    <select name="role" onChange={handleInputChange} className="form-control">
                        <option className="" value="customer">Customer</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
                {error && <p>Error</p>}
            </form>
        </div>
    )
}

export default CreateUser;