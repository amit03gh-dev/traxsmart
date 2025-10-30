export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  label: string;
  link: string;
  price: string;
}

export interface ProductListData {
  id: number | string;
  pageTitle: string;
  pageDescription: string;
  breadcrumbs: string[];
  publishedAt: string;
  products: ProductItem[];
}


export interface ProductListApiResponse {
  data: ProductListData;
}
