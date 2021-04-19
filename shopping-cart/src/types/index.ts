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

interface ProductList {
  items: Product[];
}

export type { ProductList };