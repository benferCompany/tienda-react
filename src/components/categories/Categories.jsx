import CardCategory from "./card/CardCategory";
import useFetch from "../../hook/useFetch";
import usePagination from "../../hook/usePagination";

function Categories() {
    const { startIndex, endIndex, handlePageChange, currentPage, pageSize } = usePagination();
    const { data, error, loading } = useFetch("https://api.escuelajs.co/api/v1/categories","category");
    const dataCount = data ? data.length / pageSize : 0;

    if (!Array.isArray(data)) {
        // Manejar el caso donde data no es un array (puede ser null o undefined)
        return null; // O devuelve un mensaje de error, una lista vacía, o cualquier otra cosa que necesites
    }
    return (
        <>
            <div>
                <div className="bg-dark text-light">
                    <h1 className="ms-5">Categorias</h1>
                </div>
                <div className="row justify-content-center">
                    {data && data.slice(startIndex, endIndex).map((element, index) => {
                        return <CardCategory key={index} data={element} />
                    })}
                    {loading && <h1>Cargando....</h1>}
                    {error && <h1>Error en la petición!</h1>}
                    <div className="d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li onClick={() => handlePageChange(currentPage - 1, data.length)} className="page-item"><a className="page-link" href="#">Anterior</a></li>
                                <li className="page-item"><a className="page-link" href="#">{currentPage} de {Math.ceil(dataCount)}</a></li>
                                <li onClick={() => handlePageChange(currentPage + 1, data.length)} className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Categories;