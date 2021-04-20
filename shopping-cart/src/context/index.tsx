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
  addToCart: (item: CartItem) => void;
}

const ProductsContext = createContext<Partial<ContextProps>>({});

const ProductsProvider = ({ children }: Props) => {
  const initCartItem: CartItem[] = [];
  const products: Product[] = productList.items;

  const [cartItem, setCartItem] = useState(initCartItem);
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
      return item.sys.id === id ? { ...item, count: (item.count += 1) } : item;
    });
    setCartItem(newCartItem);
  };

  const decrementCartItemCount = (id: string) => {
    const newCartItem = cartItem
      .map(item => {
        return item.sys.id === id && item.count > 0
          ? { ...item, count: (item.count -= 1) }
          : item;
      })
      .filter(item => item.count > 0);
    setCartItem(newCartItem);
  };

  const addToCart = (item: CartItem) => {
    setCartItem([...cartItem, item]);
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (cartItem.length > 0) {
        const totalPrice = cartItem
          .map(item => item.count * item.fields.price)
          .reduce((acc, cur) => acc + cur);
        setTotalPrice(parseFloat(totalPrice.toFixed(2)));
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
        addToCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
