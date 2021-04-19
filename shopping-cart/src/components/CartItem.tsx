import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CartItem as Item } from '../types';

interface Props {
  item: Item;
}

const CartItem = ({item}: Props) => {
  const { count } = item;
  const { title, price } = item.fields;
  const { url } = item.fields.image.fields.file;

  return (
    <div className="cart-item">
      <img src={url} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <span className="remove-item">remove</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faChevronUp} />
        <p className="item-amount">{count}</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};

export default CartItem;
