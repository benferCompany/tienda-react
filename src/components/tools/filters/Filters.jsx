import { useState } from "react";


const Filters = () => {
    const [rangeValueMin, setRangeValueMin] = useState(0);
    const [rangeValueMax, setRangeValueMax] = useState(10000);
    const handleFilterMin = (e) => {
        console.log(e.target.value)
        setRangeValueMin(e.target.value)



    };

    const handleFilterMax = (e) => {
        console.log(e.target.value)
        setRangeValueMax(e.target.value)



    };
    const handleInputFilterMin = (e) => {
        setRangeValueMin(e.target.value)
    }
    const handleInputFilterMax = (e) => {
        setRangeValueMax(e.target.value)
    }
    return (
        <>
            <div>
                <div className="text-center">
                    <h2>Filtros</h2>
                </div>
                <form >
                    <div className="d-flex justify-content-around align-items-center">
                        <div className="form-group justify-content-center d-flex">
                            <div className="text-center">
                                <label>Precio Minimo</label>
                                <h3 >$<input onChange={handleInputFilterMin} value={rangeValueMin} className="text-center w-50" type="number" /></h3>
                                <input type="range" onChange={handleFilterMin} value={rangeValueMin} min="0" max="10000" className="form-control-range" />
                            </div>
                        </div>

                        <div class="form-group w-25 pb-5">
                            <div className="mt-2">
                                <label >Buscar por titulo</label>
                                <input className="form-control" type="text" placeholder="Ingrese un titulo" readonly />
                            </div>
                            <label>Seleccionar una categoría</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>

                        </div>

                        <div className="d-flex align-items-center">
                            <div className="form-group justify-content-center d-flex">
                                <div className="text-center">
                                    <label>Precio Maximo</label>
                                    <h3 >$<input onChange={handleInputFilterMax} value={rangeValueMax} className="text-center w-50" type="number" /></h3>
                                    <input type="range" onChange={handleFilterMax} value={rangeValueMax} min="0" max="10000" className="form-control-range" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pb-3"><input type="submit" className="w-50 btn btn-success" value="Filtrar" /></div>
                </form>
            </div>
        </>
    )
}

export default Filters;