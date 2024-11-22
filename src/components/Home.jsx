import { Link } from "react-router-dom"
import logo1 from "../assets/images/logo1.png"
import homeImg from "../assets/images/homeImg.png"

import "./home.css"

function Home() {
    return (
        <div className="homeContainer">
            <section className="generalData">
                <Link className="logo" to="/"><img src={logo1} /> </Link>
                <p className="homeMsg"> Impacta tu vida de una forma fisíca, social y  ambiental. Promoviendo así la movilidad ecológica, reduciendo la huella de carbono e impulsando hábitos saludables.
                </p>
                <button className="btn-data ">Ver más</button>
            </section>
            <section >
                <img className="homeImg" src={homeImg} alt="Woman in bicicle" />
            </section>
        </div>
    )
}

export default Home
