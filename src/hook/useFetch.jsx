import { useState } from "react";
import { useQuery } from "react-query";

const useFetch = (API_URL,name) => {

  const [error, setError] = useState(false);

  const { data, isError, isLoading: loading, isSuccess,isIdle } = useQuery(name, async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();

      if (json.error == "Not Found"|| json.message) {
        setError(true);
      }
      return json;

    } catch (e) {
      setError(true);      
    }
  })

  return  { data, error, loading, isSuccess,isIdle }
}

export default useFetch;