import { useState } from "react";
import { useQuery } from "react-query";

const useGet = (API_URL) => {

    const [error, setError] = useState(false);
    const [id, setId] = useState(0)
    const [name,setName] =useState("")
    const { data, isError, isLoading: loading, isSuccess } = useQuery(name, async () => {
        try {
            const res = await fetch(API_URL + id);
            const json = await res.json();

            if (json.error == "Not Found") {
                setError(true);
            }
            return json;

        } catch (e) {
            setError(true);
        }
    })
    const handleInputChange = (e) => {
        setName(""+e.target.value)
        setId(e.target.value)

    };

    return { data, error, loading, isSuccess, handleInputChange, setId }
}

export default useGet;