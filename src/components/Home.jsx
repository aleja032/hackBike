import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import homeImg from "../assets/images/homeImg.png"

import "./home.css"

function Home() {
    return (
        <div className="homeContainer">
            <section className="generalData">
                <div>
                    <Link className="logo" to="/"><img src={logo} /> </Link>
                </div>
                <p className="homeMsg"> Impacta tu vida de una forma fisíca, social y  ambiental. Promoviendo así la movilidad ecológica, reduciendo la huella de carbono e impulsando hábitos saludables.
                </p>
                <button className="btn btn-data ">Ver más</button>
            </section>
            <section >
                <img className="homeImg" src={homeImg} alt="Woman in bicicle" />
            </section>
        </div>
    )
}

export default Home
