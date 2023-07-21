import { useState } from "react";
import { useQuery } from "react-query";

const useGetHeader = (API_URL, name,access_token) => {
    const [error, setError] = useState(false);

    const { data, isError, isLoading: loading, isSuccess } = useQuery(name, async () => {
        try {
            const res = await fetch(API_URL, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                }
            });
            const json = await res.json();

            if (json.error == "Not Found") {
                setError(true);
            }
            return json;

        } catch (e) {
            setError(true);
        }
    })

    return { data, error, loading, isSuccess }
}

export default useGetHeader;