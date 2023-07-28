import React from "react";
import useFetch from "../../../hook/useFetch";
import usePostData from "../../../hook/usePostData";
import UrlImages from "./url_images/UrlImages";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
const ProductCreate = () => {
    const navigate = useNavigate();
    const {isAdmin} = useAuth()
    const { data: category } = useFetch("https://api.escuelajs.co/api/v1/categories", "category");
    const { handleOnSubmit, handleInputChange, dataMutation,setError,error,success,setSuccess } = usePostData("https://api.escuelajs.co/api/v1/products")
    console.log(dataMutation)
    
    
    
  
    
    return (
        <>

            <div className="bg-dark text-white">
                <h1>Crear Producto</h1>
            </div>
            {isAdmin &&
                <div className="d-flex justify-content-center mt-5">

                    <form onSubmit={(e) => {
                        handleOnSubmit(e)
                        e.preventDefault();
                    }} className="form w-25 text-center" action="">
                        <div>
                            <label>Titulo</label>
                            <input onChange={(e) => {
                                handleInputChange(e.target.name, e.target.value)
                            }} className="form-control" name="title" type="text" />
                        </div>
                        <div>
                            <label>Descripción</label>
                            <input onChange={(e) => {
                                handleInputChange(e.target.name, e.target.value)
                            }} className="form-control" name="description" type="text" />
                        </div>
                        <div>
                            <label>Precio</label>
                            <input onChange={(e) => {
                                handleInputChange(e.target.name, e.target.value)
                            }} className="form-control" name="price" type="number" />
                        </div>
                        <div>
                            <label>Categoría</label>
                            <select onChange={(e) => {
                                handleInputChange(e.target.name, e.target.value)
                            }} className="form-control text-center" name="categoryId" id="">
                                <option value="">Elija una categoría</option>
                                {category && category.map((element, index) => {
                                    return <option key={index} value={element.id}>{element.name}</option>
                                })}

                            </select>
                        </div>
                        <UrlImages prop={handleInputChange} />
                        {dataMutation.data&& dataMutation.data.message &&
                            <div>
                                <p>Al parecer hubo algún problema con la petición. Verifique que los datos sean correctos</p>
                            </div>}
                        <div>
                            <input className="btn btn-success mt-2" type="submit" value="Crear producto" />
                        </div>
                    </form>
                </div>
                
            }
            {dataMutation.data&&!dataMutation.data.message && navigate("/productSuccess/"+dataMutation.data.id)}
            {!isAdmin && <h1>Usted no tiene permiso para realizar esta tarea</h1>}
        </>
    )
}

export default ProductCreate;