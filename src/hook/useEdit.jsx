import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const useEdit = (API_URL, initialId = "") => {
  const [error, setError] = useState(false);
  const [id, setId] = useState(initialId);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { data, isError, isLoading: loading, isSuccess } = useQuery(
    ["category", id],
    async () => {
      try {
        const res = await fetch(API_URL + id);
        const json = await res.json();

        if (json.error === "Not Found") {
          setError(true);
        } else {
          setError(false);
          setName(json.name);
          setImage(json.image);
        }

        return json;
      } catch (e) {
        setError(true);
      }
    }
  );

  const handleIdChange = (event) => {
    setId(event);
  };

  useEffect(() => {
    setId(initialId);
  }, [initialId]);

  // useEffect to update name and image when id changes
  useEffect(() => {
    if (data) {
      setName(data.name);
      setImage(data.image);
    } else {
      setName("");
      setImage("");
    }
  }, [data]);

  return {
    data,
    error,
    loading,
    isSuccess,
    id,
    name,
    image,
    handleIdChange,
    setId,
    setName,
    setImage,
  };
};

export default useEdit;
