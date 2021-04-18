import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindowClose,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import productOne from '../assets/images/product-1.jpeg';

const Cart = () => {
  return (
    <div className="cart-overlay">
      <div className="cart">
        <span className="close-cart">
          <FontAwesomeIcon icon={faWindowClose} />
        </span>
        <h2>your cart</h2>
        <div className="cart-content">
          {/* Cart Item */}
          <div className="cart-item">
            <img src={productOne} alt="product" />
            <div>
              <h4>queen bed</h4>
              <h5>$66.00</h5>
              <span className="remove-item">remove</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronUp} />
              <p className="item-amount">1</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          {/* End Cart Item */}
        </div>
        <div className="cart-footer">
          <h3>
            your total: $<span className="cart-total">66.00</span>
          </h3>
          <button className="clear-cart banner-btn">clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
