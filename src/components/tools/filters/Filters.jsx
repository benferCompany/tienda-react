import useFetch from "../../../hook/useFetch";

const Filters = (prop) => {

    const { data: category } = useFetch("https://api.escuelajs.co/api/v1/categories", "category");

    const { formData, handleChangeFilter, handleSubmitFilters } = prop.prop;

    if (!Array.isArray(category)) {
        // Manejar el caso donde category no es un array (puede ser null o undefined)
        return null; // O devuelve un mensaje de error, una lista vacía, o cualquier otra cosa que necesites
    }
    return (
        <>
            <div>
                <div className="text-center">
                    <h2>Filtros</h2>
                </div>
                <form onSubmit={handleSubmitFilters} >
                    <div className="d-flex justify-content-around align-items-center">
                        <div className="form-group justify-content-center d-flex">
                            <div className="text-center">
                                <label>Precio Minimo</label>
                                <h3 >$<input name="price_min" onChange={handleChangeFilter} value={formData.price_min} className="text-center w-50" type="number" /></h3>
                                <input type="range" name="price_min" onChange={handleChangeFilter} value={formData.price_min} min="0" max="10000" className="form-control-range" />
                            </div>
                        </div>

                        <div className="form-group w-25 pb-5">
                            <div className="mt-2">
                                <label >Buscar por titulo</label>
                                <input name="title" onChange={handleChangeFilter} className="form-control" type="text" placeholder="Ingrese un titulo" readonly />
                            </div>
                            <label>Seleccionar una categoría</label>
                            <select name="categoty" onChange={handleChangeFilter} className="form-control">
                                <option value="none">Ingrese una categoria</option>
                                {category && category.map((element, index) => {
                                    return <option key={index} value={element.id}>{element.name}</option>
                                })}

                            </select>

                        </div>

                        <div className="d-flex align-items-center">
                            <div className="form-group justify-content-center d-flex">
                                <div className="text-center">
                                    <label>Precio Maximo</label>
                                    <h3 >$<input name="price_max" onChange={handleChangeFilter} value={formData.price_max} className="text-center w-50" type="number" /></h3>
                                    <input type="range" name="price_max" onChange={handleChangeFilter} value={formData.price_max} min="0" max="10000" className="form-control-range" />
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