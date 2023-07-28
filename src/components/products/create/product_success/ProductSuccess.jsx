import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../../hook/useFetch";
import useAuth from "../../../../hook/useAuth";
import { useState } from "react";
import axios from "axios";
const ProductSuccess = () => {
    const { id } = useParams()
    const [success, setSuccess] = useState(false)
    const { data, error, loading, isSuccess, isIdle } = useFetch("https://api.escuelajs.co/api/v1/products/" + id, "product");
    const { isAdmin } = useAuth();
    const handleDeleteClick = () => {
        const isConfirmed = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
        if (isConfirmed) {
            axios.delete("https://api.escuelajs.co/api/v1/products/" + id)
                .then((response) => {
                    
                    if (response.status == 200) {
                        setSuccess(true);
                    }
                }).catch((error) => {
                    setSuccess(false);
                    
                })
            // Aquí llamarías a la función para eliminar el producto por su ID
            // Por ejemplo, handleDelete(id);


        }
    };

    return (
        <>
            {loading && isIdle && <h1>Cargando</h1>}
            {error && <h1>Hubo un problema</h1>}


            {data&&isSuccess&&!isIdle && !success&&
                <>
                    <div className="m-2 d-flex justify-content-center">

                        <div className="w-25 card p-2">
                            <div className="">
                                <img className="w-100" src={data.images[0]} />
                            </div>
                            <div>
                                <h1>Titulo: {data.title}</h1>
                            </div>
                            <div>
                                <h3>Categoría: {data.category.name}</h3>
                            </div>
                            <div>
                                <p><strong>Descripción:</strong> {data.description}</p>
                            </div>
                            <div>
                                <p><strong>Precio:</strong> {data.price}</p>
                            </div>
                            {isAdmin && <div className="d-flex justify-content-center">
                                <button onClick={handleDeleteClick} className="btn btn-danger me-2" >Eliminar</button>
                                <Link className="btn btn-warning ms-2" to={"/productEdit/" + data.id}>Editar Producto</Link>
                            </div>}
                        </div>
                    </div>
                </>}
            {success &&
                <div>
                    <p className="h4 text-success">El producto se elimino con éxito. Precione el boton volver para ir a productos</p>
                    <Link className="btn btn-success" to="/products">Volver</Link>
                </div>
            }
        </>
    )
}

export default ProductSuccess;