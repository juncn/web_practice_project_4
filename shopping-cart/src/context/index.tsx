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
  totalPrice: number;
  isCartOpen: boolean;
  toggleCart: () => void;
  clearCart: () => void;
  incrementCartItemCount: (id: string) => void;
  decrementCartItemCount: (id: string) => void;
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
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const clearCart = () => {
    setCartItem([]);
  };

  const incrementCartItemCount = (id: string) => {
    const newCartItem = cartItem.map(item => {
      return item.sys.id === id ? { ...item, count: item.count += 1 } : item;
    });
    setCartItem(newCartItem);
  };

  const decrementCartItemCount = (id: string) => {
    const newCartItem = cartItem.map(item => {
      return item.sys.id === id && item.count > 0
        ? { ...item, count: item.count -= 1 }
        : item;
    });
    setCartItem(newCartItem);
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (cartItem.length > 0) {
        const totalPrice = cartItem
          .map(item => item.count * item.fields.price)
          .reduce((acc, cur) => acc + cur);
        setTotalPrice(totalPrice);
      } else {
        setTotalPrice(0);
      }
    };

    const calculateCartCount = () => {
      if (cartItem.length > 0) {
        const totalCount = cartItem
          .map(item => item.count)
          .reduce((acc, cur) => acc + cur);
        setCartCount(totalCount);
      } else {
        setCartCount(0);
      }
    };

    calculateCartCount();
    calculateTotalPrice();
  }, [cartItem]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isCartOpen,
        cartItem,
        cartCount,
        totalPrice,
        toggleCart,
        clearCart,
        incrementCartItemCount,
        decrementCartItemCount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
