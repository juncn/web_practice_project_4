import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.svg';
import Cart from './Cart';
import { ProductsContext } from '../context';

const Navbar = () => {
  const { toggleCart } = useContext(ProductsContext);

  const openCart = () => {
    if (toggleCart) {
      toggleCart();
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <img src={logo} alt="store logo"/>
        <div className="cart-btn" onClick={openCart}>
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