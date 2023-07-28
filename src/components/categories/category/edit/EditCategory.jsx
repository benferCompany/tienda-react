import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useAuth from '../../../../hook/useAuth';
import { useParams } from 'react-router-dom';

const EditCategory = () => {
    const { isAdmin } = useAuth()
    const { idEdit } = useParams();
    const [state, setState] = useState(false);
    const [stateError, setStateError] = useState(false);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');


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
        axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`)
            .then((response) => {

                const { id, name, image } = response.data;
                setId(id)
                setName(name);
                setImage(image);

            })
            .catch((error) => {
                
                setName("");
                setImage("");
                
                // Manejar el error en caso de que el ID no exista o haya un problema con la API
                console.error('Error al obtener los datos de categoría', error);
            });
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Crear el objeto con los datos actualizados del artículo
        const updatedArticle = {
            "id": id,
            "name": name,
            "image": image,

        };
        // Realizar la solicitud PUT a la API REST para actualizar el artículo
        axios.put(`https://api.escuelajs.co/api/v1/categories/${id}`, updatedArticle)
            .then((response) => {
                // Aquí podrías manejar la respuesta exitosa, si lo deseas
                setState(response.status);
                setId("")
                setName("");
                setImage("");
                console.log('Categoría actualizada con éxito', response.data);
            })
            .catch((error) => {
                setStateError(true)
                setName("");
                setImage("");

                // Manejar el error en caso de que ocurra algún problema al actualizar el artículo
                console.error('Error al actualizar la categoría', error);
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
                        <label>Nombre:</label>
                        <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Imagen:</label>
                        <textarea className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success mt-2" type="submit">Enviar</button>
                    </div>
                    {state && <p className="text-success h6 text-center">Los datos se enviaron correctamente</p>}
                    {stateError && <p className="text-success h6 text-center">Al parecer hubo un error al enviar la petición</p>}
                </form>
            </div>
            }
            {!isAdmin && <h1>Usted no tiene permiso para realizar esta Acción</h1>}
        </>
    );
};

export default EditCategory;
