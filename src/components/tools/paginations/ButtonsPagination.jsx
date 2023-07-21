
const ButtonsPagination = (prop) => {
    
    const {handlePageChange, currentPage, data, pageSize} = prop.prop;

   
    const dataCount = data ? data.length/pageSize:0;
    
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li onClick={() => handlePageChange(currentPage - 1, data.length)} className="page-item"><a className="page-link" href="#">Anterior</a></li>
                    <li className="page-item"><a className="page-link" href="#">{currentPage} de {Math.ceil(dataCount)}</a></li>
                    <li onClick={() => handlePageChange(currentPage + 1, data.length)} className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default ButtonsPagination;