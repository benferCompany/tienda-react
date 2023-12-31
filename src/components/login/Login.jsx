import usePostData from "../../hook/usePostData";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
    const API_URL = 'https://api.escuelajs.co/api/v1/auth/login';
    const { error, success, dataMutation, handleOnSubmit, handleInputChange } = usePostData(API_URL);

    const { handleAuth } = useContext(AuthContext);

    if (success) {

        handleAuth(dataMutation.data)
    }


    return (
        <>{
            <div className="d-flex justify-content-center mt-5">

                <form onSubmit={handleOnSubmit} className="w-25 rounded border p-2">
                    <div className="justify-content-center d-flex "><h1>Ingresar</h1></div>
                    <div className="form-group">
                        <label >Email</label>
                        <input onChange={(e) => {
                            handleInputChange(e.target.name, e.target.value)
                        }} type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Ingrese su email" />

                    </div>
                    <div className="form-group">
                        <label >Contraseña</label>
                        <input onChange={(e) => {
                            handleInputChange(e.target.name, e.target.value)
                        }} type="password" name="password" className="form-control" placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="mt-3 d-flex justify-content-around">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                        <Link to="/createuser" type="button" className="btn btn-dark">Crear cuenta</Link>
                    </div>
                    <div>



                    </div>
                    {dataMutation.isLoading && <span>Creando usuario...</span>}
                    {error &&
                        <span>Error al crear el usuario</span>
                    }
                    {success &&

                        <span>Usuario creado exitosamente</span>
                    }
                </form>

            </div>
        }


        </>
    )
}

export default Login;