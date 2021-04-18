import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.svg';
import Cart from './Cart';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <img src={logo} alt="store logo"/>
        <div className="cart-btn">
          <span className="nav-icon">
            <FontAwesomeIcon icon={faCartPlus} />
          </span>
          <div className="cart-items">0</div>
        </div>
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;