import { useState } from "react";
import { useMutation } from "react-query";


const usePost = (API_URL,userData) => {


    const [formData, setFormData] = useState({userData});
   
    const dataMutation = useMutation(async () => {

        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ["email"]: "john@mail.com",
                ["password"]: "changeme"
              }),
        })
        const json = res.json();
        return json;


    });

        
    

    
    
    return {dataMutation}
}

export default usePost;