import { useState } from "react";

const UrlImages = ({prop:handleInputChange}) => {
    const [imageUrls, setImageUrls] = useState([]);
    const handleInputChangeArray = (value, index) => {
        
        const updatedUrls = [...imageUrls];
        updatedUrls[index] = value;
        setImageUrls(updatedUrls);
        handleInputChange("images",updatedUrls);
    }
    return (
        <>
            <div>
                <label>URL de imagen 1</label>
                <input onChange={(e) => {
                    handleInputChangeArray(e.target.value,0)
                    
                }} className="form-control" name="images" type="text" id="" />
            </div>
            <div>
                <label>URL de imagen 2</label>
                <input onChange={(e) => {
                    handleInputChangeArray(e.target.value,1)
                    
                }} className="form-control" name="images" type="text" id="" />
            </div>
            <div>
                <label>URL de imagen 3</label>
                <input onChange={(e) => {
                    handleInputChangeArray(e.target.value,2)
                    
                }} className="form-control" name="images" type="text" id="" />
            </div>
        </>
    )
}

export default UrlImages;