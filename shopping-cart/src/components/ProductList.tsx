import { useContext } from 'react';
import Product from './Product';
import { ProductsContext } from '../context';

interface ProductInfo {
  id: string;
  title: string;
  price: number;
  url: string;
}

const ProductList = () => {
  const { products } = useContext(ProductsContext);
  
  const productList = products && products.map(product => {
    const productInfo: ProductInfo = {
      id: product.sys.id,
      title: product.fields.title,
      price: product.fields.price,
      url: product.fields.image.fields.file.url
    };

    return <Product key={productInfo.id} product={productInfo} />;
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
