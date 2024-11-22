import { useState, useEffect } from "react";
import "./footer.css"
import Nav from "./nav/Nav";

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <footer className="footerContainer">
            {!isMobile ? (
                <>
                    <p> © MD - KeyCode - 2024</p>
                    <p>HackBike</p>
                    <p>All Rights Reserved.</p>
                </>
            ) : (
                <Nav />
            )
            }
        </footer>
    );
};

export default Footer;
