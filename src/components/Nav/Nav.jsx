import logo from '../../assets/images/logo.png'
import './Nav.css'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Nav = ({ cartCount, onOpenCart }) => {
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
                <button type="button" className='nav_icons' aria-label="Search section">
                    <FaSearch />
                </button>
                <button type="button" className='nav_icons' aria-label="User account">
                    <FaUser />
                </button>
                <button type="button" className='nav_icons cart-button' onClick={onOpenCart} aria-label="Open cart">
                    <FaShoppingCart />
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </button>



            </div>
        </nav>

    )
}

export default Nav