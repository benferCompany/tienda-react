import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useAuth from '../../../hook/useAuth';
import { useParams } from 'react-router-dom';

const ProductEdit = () => {
    const { isAdmin } = useAuth()
    const [id, setId] = useState('');


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [state, setState] = useState('');
    const { idEdit } = useParams();

    useEffect(() => {
        if (idEdit) {
            handleIdChange(idEdit)
        }
    }, [])

    const handleIdChange = (event) => {

        setId(event)
        setState("")
        handleIdBlur(event)
    };


    const handleIdBlur = (id) => {

        // Realizar solicitud a la API REST para obtener los datos del artículo
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((response) => {

                const { id, title, description, price, images } = response.data;
                setId(id)
                setTitle(title);
                setDescription(description);
                setPrice(price);
                setImg1(images[0]);
                setImg2(images[1]);
                setImg3(images[2]);
            })
            .catch((error) => {
                console.log(error)
                setTitle("");
                setDescription("");
                setPrice("");
                setImg1("");
                setImg2("");
                setImg3("");




                // Manejar el error en caso de que el ID no exista o haya un problema con la API
                console.error('Error al obtener los datos del artículo', error);
            });
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Crear el objeto con los datos actualizados del artículo
        const updatedArticle = {
            "id": id,
            "title": title,
            "descripcion": description,
            "price": price,
            "images": [img1, img2, img3]
        };
        // Realizar la solicitud PUT a la API REST para actualizar el artículo
        axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, updatedArticle)
            .then((response) => {
                // Aquí podrías manejar la respuesta exitosa, si lo deseas
                setState(response.status);
                setId("")
                setTitle("");
                setDescription("");
                setPrice("");
                setImg1("");
                setImg2("");
                setImg3("");
                console.log('Artículo actualizado con éxito', response.data);
            })
            .catch((error) => {

                // Manejar el error en caso de que ocurra algún problema al actualizar el artículo
                console.error('Error al actualizar el artículo', error);
            });
    };
    // Aquí podrías agregar la lógica para enviar el formulario a la API al hacer submit

    return (
        <>
            {isAdmin && <div className="d-flex justify-content-center m-2">
                <form className='form-control w-50' onSubmit={handleFormSubmit}>
                    <div>
                        <label>ID:</label>
                        <input className="form-control" value={id} type="text" onChange={(e) => {
                            handleIdChange(e.target.value)
                        }} />
                    </div>
                    <div>
                        <label>Título:</label>
                        <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <label>Precio:</label>
                        <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label>Imagen 1:</label>
                        <input className="form-control" type="text" value={img1} onChange={(e) => setImg1(e.target.value)} />
                    </div>
                    <div>
                        <label>Imagen 2:</label>
                        <input className="form-control" type="text" value={img2} onChange={(e) => setImg2(e.target.value)} />
                    </div>
                    <div>
                        <label>Imagen 3:</label>
                        <input className="form-control" type="text" value={img3} onChange={(e) => setImg3(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success mt-2" type="submit">Enviar</button>
                    </div>
                    {state && <p className="text-success h6 text-center">Los datos se enviaron correctamente</p>}
                </form>
            </div>
            }
            {!isAdmin && <h1>Usted no tiene permiso para realizar esta Acción</h1>}
        </>
    );
};

export default ProductEdit;
