import { createContext, useEffect, useState } from 'react';
import productList from '../assets/products.json';
import { Product, CartItem } from '../types';

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  products: Product[];
  cartItem: CartItem[];
  cartCount: number;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const mockData = [
  {
    sys: { id: '1' },
    fields: {
      title: 'queen panel bed',
      price: 10.99,
      image: { fields: { file: { url: './images/product-1.jpeg' } } },
    },
    count: 1,
  },
  {
    sys: { id: '2' },
    fields: {
      title: 'king panel bed',
      price: 12.99,
      image: { fields: { file: { url: './images/product-2.jpeg' } } },
    },
    count: 2,
  },
];

const ProductsContext = createContext<Partial<ContextProps>>({});

const ProductsProvider = ({ children }: Props) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState(productList.items);
  // eslint-disable-next-line
  const [cartItem, setCartItem] = useState(mockData);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const calculateCartCount = () => {
    const totalCount = cartItem
      .map(item => item.count)
      .reduce((acc, cur) => acc + cur);
    setCartCount(totalCount);
  };

  useEffect(calculateCartCount, [cartItem]);

  return (
    <ProductsContext.Provider
      value={{ products, isCartOpen, toggleCart, cartItem, cartCount }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
