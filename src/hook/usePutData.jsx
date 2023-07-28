import { useState } from "react";
import { useMutation } from "react-query";


const usePutData = (API_URL) => {


   
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [id, setId] = useState(1);
    const dataMutation = useMutation(async () => {

        const res = await fetch(API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const json = await res.json();
        return json;


    });

    const handleInputChange = (name,value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOnSubmit = (e) => {
        setError(false)
        setSuccess(false)
        dataMutation.mutate(formData, {
            onSuccess: (json) => {
                if (json.message) {
                    setError(true);
                    setSuccess(false)
                } else if (json.statusCode != 401 || json.statusCode != 400) {
                    setError(false);
                    setSuccess(true);
                }


            }
        });

    };
    return {error,setError,setSuccess, success, dataMutation,  handleOnSubmit, handleInputChange,formData,setId}
}

export default usePutData;