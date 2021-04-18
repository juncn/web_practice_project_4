import Product from './Product';

const ProductList = () => {
  return (
    <section className="products">
      <div className="section-title">
        <h2>our product</h2>
      </div>
      <div className="products-center">
        <Product />
      </div>
    </section>
  );
};

export default ProductList;
