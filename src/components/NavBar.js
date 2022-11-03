import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"
import { IoMenu } from "react-icons/io5";


const NavBar = () => {

    const handleMenuClick = () => {
        const navLinks = document.querySelector(".navLinks")
        navLinks.classList.toggle('menuIconActive')
    }

    const handleLinkClick = () => {
        const navLinks = document.querySelector(".navLinks")
        navLinks.classList.remove('menuIconActive')
    }

    return(
        <div className="navBarContainer">
            <Link to="/"><h1 className="logo">Kritsch Deportivos</h1></Link>
            <ul className="navLinks">
                <li onClick={handleLinkClick}><Link to="category/auto">Autos</Link></li>
                <li onClick={handleLinkClick}><Link to="category/suv">Suv</Link></li>
                <li onClick={handleLinkClick}><Link to="category/camioneta">Camionetas</Link></li>
            </ul>
            <div className="icons">
                <Link to="/carrito"><CartWidget /></Link>
                <IoMenu onClick={handleMenuClick} className="menuIcon" />
            </div>
        </div>
    )
}

export default NavBar;