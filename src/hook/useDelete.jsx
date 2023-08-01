import axios from "axios";
const useDelete=()=>{

    const handleDeleteClick = (url,id) => {
        const isConfirmed = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
        if (isConfirmed) {
            axios.delete(url + id)
                .then((response) => {
    
                    if (response.status == 200) {
                        setSuccess(true);
                    }
                }).catch((error) => {
                    setSuccess(false);
    
                })
        }
    
    };
    return {handleDeleteClick}

}

export default useDelete;