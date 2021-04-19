import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';
import { ProductsContext } from '../context';

const Cart = () => {
  const { isCartOpen, toggleCart } = useContext(ProductsContext);

  const overlayClass = isCartOpen ? 'transparentBcg' : '';
  const cartClass = isCartOpen ? 'showCart' : '';

  const closeCart = () => {
    if (toggleCart) {
      toggleCart();
    }
  };

  return (
    <div className={`cart-overlay ${overlayClass}`} onClick={closeCart}>
      <div className={`cart ${cartClass}`} onClick={e => e.stopPropagation()}>
        <span className="close-cart" onClick={closeCart}>
          <FontAwesomeIcon icon={faWindowClose} />
        </span>
        <h2>your cart</h2>
        <div className="cart-content">
          {/* Cart Item */}
          <CartItem />
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
