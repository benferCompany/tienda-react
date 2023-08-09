import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext"
function Nav() {
    const {auth} = useContext(AuthContext);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/categories">Categorias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Productos</Link>
                        </li>
                        {auth &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/cartDetail">Carrito &#128722;</Link>
                        </li> }
                        <li className="nav-item position-absolute bottom-0 end-0">
                            <Link className="nav-link" to="/login"><span className="d-flex"><p className="h3">&#128100;</p></span></Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;