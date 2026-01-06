import logo from '../../assets/images/logo.png'
import './Nav.css'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Nav = () => {
    return (

        <nav className="navbar">
            <ul className="navbar-list">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Fertilizer</a></li>
                <li><a href="#">Guide</a></li>
            </ul>
            <a href="#" className="navbar-logo">
                <img src={logo} alt="Plantify logo" />
            </a>
            <div className="navbar-actions">
                <a href="#" className='nav_icons'><FaSearch /></a>
                <a href="#" className='nav_icons'><FaUser /></a>
                <a href="#" className='nav_icons'><FaShoppingCart /></a>



            </div>
        </nav>

    )
}

export default Nav