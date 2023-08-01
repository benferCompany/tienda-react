import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartComponent";
import { useNavigate } from "react-router-dom";

const TdDetail = ({ element }) => {
    
    const { deleteProduct, handleSubmit, getTotal } = useContext(CartContext);
    const handleDelete = (id) => {
        deleteProduct(id)

    }
    const navigate = useNavigate()
    const [count, setCount] = useState(element.count);
    const [message, setMessage] = useState("");

    return (

        <tr className=" align-middle">
            <td>{element.id}</td>
            <td>{element.description}</td>
            <td>{element.category.name}</td>
            <td>{element.price}</td>
            <td className="align-middle">
                <input onClick={() => {
                    if (count > 1) {
                        setCount(count - 1)
                        handleSubmit(element, count - 1, setMessage)

                    }

                }} type="button" className="btn btn-info" value="-" />
                <input onChange={getTotal()} value={count} className="form-control-sm col-3" type="text" />
                <input onClick={() => {
                    setCount(count + 1)
                    handleSubmit(element, count + 1, setMessage)

                }} type="button" className="btn btn-info" value="+" />
            </td>
            <td className="h6">${element.price * count}</td>

            <td className="">
                <input onClick={()=>{
                    navigate("/productSuccess/"+element.id)
                }} className="btn btn-success me-1" value="Ir al producto" />
                <input onClick={() => {
                    handleDelete(element.id)
                }} className="btn btn-danger" value="Eliminar" />
            </td>
        </tr>
    )
}

export default TdDetail;