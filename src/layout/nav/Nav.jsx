
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="navbar">
            <Link className="navigation-link" to="/">Inicio</Link>
            <Link className="navigation-link" to="/cycles">Mi rutas</Link>
            <Link className="navigation-link" to="/test2">Comentarios</Link>
        </nav>
    )
}

export default Nav
