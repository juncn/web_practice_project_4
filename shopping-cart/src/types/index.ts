interface Product {
  sys: { id: string; };
  fields: {
    title: string;
    price: number;
    image: {
      fields: {
        file: {
          url: string;
        }
      }
    }
  }
}

interface CartItem extends Product {
  count: number;
}

export type { Product, CartItem };