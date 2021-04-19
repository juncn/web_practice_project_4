import { createContext, useState } from 'react';
import productList from '../assets/products.json';
import { ProductList } from '../types';

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  products: ProductList;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const ProductsContext = createContext<Partial<ContextProps>>({});

const ProductsProvider = ({ children }: Props) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState(productList);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <ProductsContext.Provider value={{ products, isCartOpen, toggleCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
