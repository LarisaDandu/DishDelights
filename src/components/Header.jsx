import { Link } from "react-router-dom";
import logo from "../assets/icon.png";

export default function Header() {

    return (
        <header>
            <nav className="navigation">
                <img src = {logo} alt = "logo" style = {{width: "5%", height: "autp"}}/>
                <p>
                    <Link className="linktext" to ="">Home</Link>
                </p>
                <p>
                    <Link className="linktext" to ="recipes">Recipes</Link>
                </p>
                <p>
                    <Link className="linktext" to ="favrecipes">Your favorites</Link>
                </p>
                <p>
                    <Link className="linktext" to ="about">About</Link>
                </p>
                <p>
                    <Link className="linktext" to ="contact">Contact</Link>
                </p>
            </nav>
        </header>
    )
}