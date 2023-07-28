import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import useFetch from "../../../hook/useFetch";
import useAuth from "../../../hook/useAuth";
const Category = () => {
    const { id } = useParams()
    const [success, setSuccess] = useState(false)
    const [errorSql, setErrorSql] = useState(false);
    const { data, error, loading, isSuccess, isIdle } = useFetch("https://api.escuelajs.co/api/v1/categories/" + id, "category");
    const { isAdmin } = useAuth();
    const handleDeleteClick = () => {
        const isConfirmed = window.confirm('¿Estás seguro de que quieres eliminar esta categoría?');
        if (isConfirmed) {
            axios.delete("https://api.escuelajs.co/api/v1/categories/" + id)
                .then((response) => {

                    if (response.status == 200) {
                        setSuccess(true);
                    }
                }).catch((error) => {
                    console.log(error)
                    setSuccess(false);
                    if (error.response.data.code === "SQLITE_CONSTRAINT_FOREIGNKEY") {
                        setErrorSql(true);
                    }

                })


        }
    };

    return (
        <>
            {loading && isIdle && <h1>Cargando</h1>}
            {error && <h1>Hubo un problema</h1>}


            {data && isSuccess && !isIdle && !success &&
                <>
                    <div className="m-2 d-flex justify-content-center">

                        <div className="w-25 card p-2">
                            <div className="">
                                <img className="w-100" src={data.image} />
                            </div>
                            <div>
                                <h1>Name: {data.name}</h1>
                            </div>

                            {isAdmin && <div className="d-flex justify-content-center">
                                <button onClick={handleDeleteClick} className="btn btn-danger me-2" >Eliminar</button>
                                <Link className="btn btn-warning ms-2" to={"/editCategory/" + data.id}>Editar categoría</Link>
                            </div>}
                        </div>
                    </div>
                </>}
            {success &&
                <div>
                    <p className="h4 text-success">El producto se elimino con éxito. Precione el boton volver para ir a productos</p>
                    <Link className="btn btn-success" to="/categories/">Volver</Link>
                </div>
            }
            {errorSql &&
                <div className="text-center">
                    <p className="text-warning h3">Al parecer no se puede borrar esta categoría porque tiene árticulos asociados con la misma</p>
                </div>}
        </>
    )
}

export default Category;