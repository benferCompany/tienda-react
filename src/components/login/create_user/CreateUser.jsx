import { Link } from "react-router-dom";
import usePostData from "../../../hook/usePostData";

const CreateUser = () => {
    const { error, success, dataMutation, handleOnSubmit, handleInputChange, formData } = usePostData("https://api.escuelajs.co/api/v1/users");
    
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



    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9_.-]*)*$/;

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={(e) => {
                console.log(formData.password.length>3)
                const validationPassword = formData.password == formData.passwordTwo && formData.password.length>3;
                const validationUrl = urlRegex.test(formData.avatar);
                
                validationPassword && validationUrl ? handleOnSubmit(e) : e.preventDefault()


            }} className="w-25">
                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input name="email" onChange={handleInputChange} type="email" className="form-control" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input name="password" onChange={handleInputChange} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Repetir contraseña</label>
                    <div></div>
                    <input name="passwordTwo" onChange={(e) => {
                        handleInputChange(e)
                        if (e.target.value == formData.password) {
                            e.target.parentNode.children[1].innerHTML = `<p class="text-success">Correcto</p>`;
                        } else {
                            e.target.parentNode.children[1].innerHTML = `<p class="text-danger">Las contraseñas no coiciden</p>`;

                        }

                    }} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input name="name" onChange={handleInputChange} type="text" className="form-control" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Url de una foto para tu perfil</label>
                    <div></div>
                    <input name="avatar" onChange={(e) => {
                        handleInputChange(e)
                        if (urlRegex.test(e.target.value)) {
                            e.target.parentNode.children[1].innerHTML = `<p class="text-success">URL valida</p>`;
                        } else {
                            e.target.parentNode.children[1].innerHTML = `<p class="text-danger">Al parecer la URL de la imgen no es correcta</p>`;

                        }


                    }

                    } type="text" className="form-control" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Seleccione un rol</label>

                    <select name="role" onChange={handleInputChange} className="form-control">
                        <option className="" value="customer">Customer</option>
                    </select>
                </div>
                {error && <p className="text-danger">Algo no esta bien. Puede que falten datos o la contraseña es muy corta.</p>}
                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>
        </div>
    )
}

export default CreateUser;