import { Link } from "react-router-dom"

import "./header.css"

function Header() {
    return (
        <header className="headerContainer">
            <nav className="navbar">
                <Link className="nav-link" to="/">Inicio</Link>
                <Link className="nav-link" to="/test1">Mi rutas</Link>
                <Link className="nav-link" to="/test2">Estaciones</Link>
            </nav>


        </header>
    )
}

export default Header
