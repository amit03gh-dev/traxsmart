export interface Feature {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  features: Feature[];  // 👈 structured
  technical: Record<string, string>;

  productTabs: {
    description: {
      title: string;
      text: string;
      highlights: string[];
      image: string;
    };
    features: Feature[]; // 👈 also structured
    technical: Record<string, string>;
    packaging: {
        items: string[];
        shipping: string[];
        bulkOrders: string[];
    };
  };
}
