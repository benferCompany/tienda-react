import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartComponent";
import TdDetail from "./detail/TdDetail";
import { Link } from "react-router-dom";


const CartDetail = () => {
    const { products, deleteProduct, handleSubmit, total, getTotal } = useContext(CartContext);
    let element = []

    for (let index in products) {
        element.push(products[index]);

    }

    return (
        <>
            <div>
                <form action="">

                    <table className="table table-striped">
                        <thead className="">
                            <tr>
                                <th>Id</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>

                            {element && element.map((element, index) => {
                                return <TdDetail element={element} />


                            })}


                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><h2>$Total:{total}</h2></td>
                            </tr>

                        </tbody>


                    </table>

                    <div className="d-flex justify-content-center"><Link to="/purchaseDetail" className="btn btn-success btn-lg" type="button">Ir a detalles y generar comprobante</Link></div>


                </form>
            </div>
        </>
    )
}

export default CartDetail;