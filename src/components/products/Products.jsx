import CardProduct from "./card_product/Card_product";
import usePagination from "../../hook/usePagination";
import ButtonsPagination from "../tools/paginations/ButtonsPagination";
import Filters from "../tools/filters/Filters";
import useFilter from "../tools/filters/hook_filters/useFilter";





const nameCategory = {
    "price_min": 0,
    "price_max": 0,
    "title": "",
    "category": ""

}
function Products() {

    const { formData, handleChangeFilter, handleSubmitFilters, data, loading, error } = useFilter(nameCategory)
    const { startIndex, endIndex, handlePageChange, currentPage, pageSize } = usePagination();

    const prop = {
        "data": data,
        "handlePageChange": handlePageChange,
        "currentPage": currentPage,
        "pageSize": pageSize

    }


    return (
        <>
            <div>
                <div className="bg-dark text-light">
                    <h1 className="ms-5">Productos</h1>
                    <Filters prop={{ formData, handleChangeFilter, handleSubmitFilters }} />
                </div>
                <div className="row justify-content-center">
                    {data && data.slice(startIndex, endIndex).map((element, index) => {
                        return <CardProduct key={index} data={element} />
                    })}

                    {error && <h1>Error en la petición!</h1>}
                    {loading && <h1>Cargando....</h1>}

                    {data && <ButtonsPagination prop={prop} />}
                </div>

            </div>

        </>
    )
}

export default Products;