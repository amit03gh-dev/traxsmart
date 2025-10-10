export interface Product {
  id: string;
  title: string;
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



export type GalleryImage = {
  src: string;
  title: string;
};









// types/product.ts

export interface Feature {
  key?: string;
  value: string;
  icon?: string;
}

export interface TechnicalSpecs {
  [key: string]: string | number;
}

export interface ProductTabDescription {
  title: string;
  text: string;
  highlights: string[];
  image: string;
}

// types/product.ts
export interface TabPane {
  componentType: string;
  data: any; // You can further type this depending on the component
}

export interface Tab {
  idx: number; // used as key
  tabTitle: string;
  tabPane: TabPane;
}

export interface ProductDetails {
  componentType: string;
  data: Tab[];
}


// export interface ProductDetails {
//   componentType: string;
//   data: any;
// }

export interface ProductImages {
  src: string;
  title: string;
  
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  images: ProductImages[];
  features: Feature[];
  technical: TechnicalSpecs;
  productDetails: ProductDetails;
}

export interface ProductData {
  id: number | string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  data: ProductItem[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ProductApiResponse {
  data: ProductData[];
  meta: {
    pagination: Pagination;
  };
}
