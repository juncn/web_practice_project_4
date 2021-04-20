import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CartItem as Item } from '../types';
import { ProductsContext } from '../context';

interface Props {
  item: Item;
}

const CartItem = ({item}: Props) => {
  const { incrementCartItemCount, decrementCartItemCount } = useContext(ProductsContext);
  const { count } = item;
  const { id } = item.sys;
  const { title, price } = item.fields;
  const { url } = item.fields.image.fields.file;

  const incrementCount = () => {
    if (incrementCartItemCount) {
      incrementCartItemCount(id);
    }
  }

  const decrementCount = () => {
    if (decrementCartItemCount) {
      decrementCartItemCount(id);
    }
  }

  return (
    <div className="cart-item">
      <img src={url} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <span className="remove-item">remove</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faChevronUp} onClick={incrementCount} />
        <p className="item-amount">{count}</p>
        <FontAwesomeIcon icon={faChevronDown} onClick={decrementCount} />
      </div>
    </div>
  );
};

export default CartItem;
