
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="navbar">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/cycles">Mi rutas</Link>
            <Link className="nav-link" to="/test2">Estaciones</Link>
        </nav>
    )
}

export default Nav
