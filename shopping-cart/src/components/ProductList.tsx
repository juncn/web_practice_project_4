import { useContext } from 'react';
import Product from './Product';
import { ProductsContext } from '../context';

const ProductList = () => {
  const { products } = useContext(ProductsContext);
  
  const productList = products && products.map(product => {
    return <Product key={product.sys.id} product={product} />;
  });

  return (
    <section className="products">
      <div className="section-title">
        <h2>our product</h2>
      </div>
      <div className="products-center">
        {productList}
      </div>
    </section>
  );
};

export default ProductList;
