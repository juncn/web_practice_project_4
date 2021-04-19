import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';
import { ProductsContext } from '../context';

const Cart = () => {
  const { isCartOpen, toggleCart, cartItem, totalPrice, clearCart } = useContext(ProductsContext);

  const overlayClass = isCartOpen ? 'transparentBcg' : '';
  const cartClass = isCartOpen ? 'showCart' : '';

  const handleCloseCart = () => {
    if (toggleCart) {
      toggleCart();
    } else {
      console.error('toggleCart function is undefined');
    }
  };

  const handleClearCart = () => {
    if (clearCart) {
      clearCart();
    } else {
      console.error('clearCart function is undefined');
    }
  }

  return (
    <div className={`cart-overlay ${overlayClass}`} onClick={handleCloseCart}>
      <div className={`cart ${cartClass}`} onClick={e => e.stopPropagation()}>
        <span className="close-cart" onClick={handleCloseCart}>
          <FontAwesomeIcon icon={faWindowClose} />
        </span>
        <h2>your cart</h2>
        <div className="cart-content">
          {cartItem?.map(item => <CartItem key={item.sys.id} item={item} />)}
        </div>
        <div className="cart-footer">
          <h3>
            your total: $<span className="cart-total">{totalPrice}</span>
          </h3>
          <button className="clear-cart banner-btn" onClick={handleClearCart}>clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
