import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import productOne from '../assets/images/product-1.jpeg';

const Product = () => {
  return (
    <article className="product">
      <div className="img-container">
        <img className="product-img" src={productOne} alt="product" />
        <button className="bag-btn" data-id="1">
          <FontAwesomeIcon icon={faShoppingCart} />
          add to bag
        </button>
      </div>
      <h3>queen bed</h3>
      <h4>$66</h4>
    </article>
  );
};

export default Product;
