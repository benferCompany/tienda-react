import { useMutation } from 'react-query';
import axios from 'axios';

const usePutEdit = () => {

    const updateCategoryMutation = useMutation(
        (updatedCategory) => axios.put(`https://api.escuelajs.co/api/v1/categories/${updatedCategory.id}`, updatedCategory),
        {
            onSuccess: () => {
                console.log('Categoría actualizada con éxito');
            },
            onError: (error) => {
                console.error('Error al actualizar la categoría', error);
            },
        }
    );

    return updateCategoryMutation;
};

export default usePutEdit;
