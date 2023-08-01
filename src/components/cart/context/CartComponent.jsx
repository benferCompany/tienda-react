import { createContext, useEffect, useState } from "react";
let subTotal = 0;
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState({});
    const [total, setTotal] = useState(0);
    const [del, setDel] = useState(0);

    const handleSubmit = (product, count, setMessage) => {
        // Verificar si el producto ya está en el carrito por su nombre
        if (products.hasOwnProperty(product.id)) {
            // El producto ya está en el carrito, actualizamos el contador
            setProducts((prevProducts) => ({
                ...prevProducts,
                [product.id]: { ...product, count },
            }));
            setMessage("Se actualiza la cantidad en el carrito");
        } else {
            // El producto no está en el carrito, lo agregamos
            setProducts((prevProducts) => ({
                ...prevProducts,
                [product.id]: { ...product, count },
            }));
            setMessage("El producto se agrego al carrito");
        }
    };

    const getTotal = () => {
        let subTotal = 0;
        for(let id in products){
            subTotal+=products[id].price*products[id].count
        }
        setTotal(subTotal);



    }

    const deleteProduct = (id) => {
       
            if (products.hasOwnProperty(id)) {
                delete products[id];
                setDel(id)
                
                console.log('Objeto borrado:', id);
            } else {
                console.log('No existe un objeto con ese ID.');
            }
        

        


    };
    const data = { products, handleSubmit, deleteProduct, getTotal, total };
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };

export default CartProvider;
