import React from 'react';
import useAuth from '../../../../hook/useAuth';
import { useParams } from 'react-router-dom';
import useEdit from '../../../../hook/useEdit';
import usePutEdit from '../../../../hook/usePutEdit';

const EditCategory = () => {
  const { isAdmin } = useAuth();
  const { idEdit } = useParams();
  const { id, name, image, handleIdChange, setName, setImage } = useEdit(
    "https://api.escuelajs.co/api/v1/categories/",
    idEdit
  );

  const updateCategoryMutation = usePutEdit(); 


  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Crear el objeto con los datos actualizados de la categoría
    const updatedCategory = {
      "id": id,
      "name": name,
      "image": image,
    };

    // Llamar al método de mutación para actualizar la categoría
    updateCategoryMutation.mutate(updatedCategory);
  };

  return (
    <>
      {isAdmin && (
        <div className="d-flex justify-content-center m-2">
          <form className='form-control w-50' onSubmit={handleFormSubmit}>
            <div>
              <label>ID:</label>
              <input className="form-control" value={id} type="text" onChange={(e) => handleIdChange(e.target.value)} />
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
            {updateCategoryMutation.isSuccess && <p className="text-success h6 text-center">Los datos se enviaron correctamente</p>}
            {updateCategoryMutation.isError && <p className="text-danger h6 text-center">Al parecer hubo un error al actualizar la categoría</p>}
          </form>
        </div>
      )}
      {!isAdmin && <h1>Usted no tiene permiso para realizar esta Acción</h1>}
    </>
  );
};

export default EditCategory;