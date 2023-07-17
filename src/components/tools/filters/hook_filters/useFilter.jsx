import { useState } from "react";
import getFilter from "./getFilter"
import useFetch from "../../../../hook/useFetch";
const useFilter = (prop) => {

    const [formData, setFormData] = useState(prop);
    const { url } = getFilter(formData);
    const [urlFetch, setUrlFech] = useState("https://api.escuelajs.co/api/v1/products/")
    const { data, loading, error } = useFetch(urlFetch, urlFetch);

    const handleChangeFilter = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });


    };

    const handleSubmitFilters = (e) => {

        e.preventDefault()
        setUrlFech(url);
       
        console.log(url)


    }

    return { formData, handleChangeFilter, handleSubmitFilters, data, loading, error };

}


export default useFilter;