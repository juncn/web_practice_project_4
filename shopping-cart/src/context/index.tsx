import { createContext, useState } from 'react';
import productList from '../assets/products.json';
import { ProductList } from '../types';

interface Props {
  children: React.ReactNode;
};

interface ContextProps {
  products: ProductList;
}

const ProductsContext = createContext<Partial<ContextProps>>({});

const ProductsProvider = ({ children }: Props) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState(productList);

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
