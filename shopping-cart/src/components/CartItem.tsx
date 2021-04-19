import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import productOne from '../assets/images/product-1.jpeg';

const CartItem = () => {
  return (
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
  );
};

export default CartItem;
