import { useState, useEffect } from "react";
import "./header.css"
import Nav from "./nav/Nav"

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="headerContainer">
            {!isMobile && <Nav className="navBar" />}

        </header>
    )
}

export default Header
