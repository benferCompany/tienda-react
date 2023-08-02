import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../cart/context/CartComponent";
import AuthContext from "../../context/AuthContext"
function CardProduct(data) {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const { handleSubmit, products } = useContext(CartContext);
    const [buttonName, setButtonName] = useState(false);
    const [message, setMessage] = useState(null);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        for (let index in products) {

            if (products[index].index === data.data.index) {
                setCount(products[index].count)
                setButtonName(true)

            }


        }
    }, [])

    return (
        <>
            {
                <div className="card m-2" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={data.data.images} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Id: {data.data.id}</h5>
                        <strong className="card-text">Titulo: {data.data.title}</strong>
                        <p>{data.data.description}</p>
                        <h2>${data.data.price}</h2>
                        <div className="d-flex justify-content-center">
                            <Link to={"/productSuccess/" + data.data.id} className="btn btn-primary me-1">info</Link>

                        </div>
                        <div>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                handleSubmit(data.data, count, setMessage)
                                setButtonName(true)

                                setTimeout(() => {
                                    setMessage(null);
                                }, 3000);


                            }}>
                                {auth && <div className="d-flex justify-content-center mt-2">
                                    <input onClick={(e) => {
                                        if (count > 1) {
                                            setCount(count - 1)
                                        }

                                    }} className="btn btn-success me-1" type="button" value="-" />
                                    <input className="form-control w-25 text-center" type="text" value={count} />
                                    <input onClick={(e) => {
                                        setCount(count + 1)
                                    }} className="btn btn-success ms-1" type="button" value="+" />
                                </div>}
                                <div className="d-flex justify-content-center mt-2">
                                    {auth && !buttonName && <input className="btn btn-info" type="submit" value="Enviar al carrito" />}
                                    {auth && buttonName && <input className="btn btn-info me-1" type="submit" value="Agregar mas" />}
                                    {auth && buttonName && <input onClick={() => {
                                        handleSubmit(data.data, count, setMessage);
                                        navigate("/cartDetail")
                                    }} className="btn btn-primary" type="submit" value="Ir al carrito" />}
                                </div>
                            </form>
                            {buttonName && <div><p className="text-success">{message}</p></div>}
                        </div>


                    </div>
                </div>
            }

        </>


    )
}

export default CardProduct;