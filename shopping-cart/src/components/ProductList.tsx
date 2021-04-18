import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import productOne from '../assets/images/product-1.jpeg';

const ProductList = () => {
  return (
    <section className="products">
      <div className="section-title">
        <h2>our product</h2>
      </div>
      <div className="products-center">
        <article className="product">
          <div className="img-container">
            <img className="product-img" src={productOne} alt="product one"/>
            <button className="bag-btn" data-id="1">
              <FontAwesomeIcon icon={faShoppingCart} />
              add to bag
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>$66</h4>
        </article>
      </div>
    </section>
  );
};

export default ProductList;