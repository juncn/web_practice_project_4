import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface Props {
  product: {
    id: string;
    title: string;
    price: number;
    url: string;
  };
};

const Product = ({ product }: Props) => {
  const { id, title, price, url } = product;

  return (
    <article className="product">
      <div className="img-container">
        <img className="product-img" src={url} alt={title} />
        <button className="bag-btn" data-id={id}>
          <FontAwesomeIcon icon={faShoppingCart} />
          add to bag
        </button>
      </div>
      <h3>{title}</h3>
      <h4>${price}</h4>
    </article>
  );
};

export default Product;
