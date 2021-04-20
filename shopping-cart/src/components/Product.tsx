import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductsContext } from '../context';
import { Product as ProductType } from '../types';

interface Props {
  product: ProductType
}

const Product = ({ product }: Props) => {
  const { id } = product.sys;
  const { title, price } = product.fields;
  const { url } = product.fields.image.fields.file;
  const { addToCart, cartItem } = useContext(ProductsContext);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleAddtoCart = () => {
    const item = { ...product, count: 1 };
    if (addToCart) {
      addToCart(item);
    }
  };

  useEffect(() => {
    const checkIsItemAdded = () => {
      const itemFound = cartItem?.find(item => item.sys.id === id);
      if (itemFound) {
        setIsItemAdded(true);
      } else {
        setIsItemAdded(false);
      }
    }
    checkIsItemAdded();
  }, [cartItem, id]);

  return (
    <article className="product">
      <div className="img-container">
        <img className="product-img" src={url} alt={title} />
        <button className="bag-btn" onClick={handleAddtoCart} disabled={isItemAdded}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {isItemAdded ? 'added to bag' : 'add to bag'}
        </button>
      </div>
      <h3>{title}</h3>
      <h4>${price}</h4>
    </article>
  );
};

export default Product;

