import useGetHeader from "../../../hook/useGetHeader";
import React, { useContext } from 'react';
import AuthContext from "../../context/AuthContext";
import { CartContext } from "../context/CartComponent";
const PurchaseDetail = () => {
  const { auth } = useContext(AuthContext)
  const { data } = useGetHeader("https://api.escuelajs.co/api/v1/auth/profile", "login", auth.access_token)
  const { products,total,getTotal } = useContext(CartContext);
  console.log(products)
  let element = [];
  for (let index in products) {
    element.push(products[index]);

  }
getTotal();
  return (
    <>
      {data && <div>
        <div className="container">
          <h1>Comprobante de compra</h1>
          <div className="d-flex justify-content-around bg-light p-2">
            <div><strong>Nombre:</strong> {data.name}</div>
            <div><strong>Email:</strong> {data.email}</div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>TITULO</th>
                <th>PRECIO</th>
                <th>CANTIDAD</th>
                <th>PRECIO TOTAL</th>
              </tr>
            </thead>
            <tbody>

              {element && element.map((element, index) => {
                return (<>
                  <tr>
                    <td>{element.id}</td>
                    <td>{element.title}</td>
                    <td>${element.price}</td>
                    <td>{element.count}</td>
                    <td>${element.price*element.count}</td>
                  </tr>
                </>)
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><h4>Total: {total}</h4> </td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>}
    </>
  );
};

export default PurchaseDetail;
