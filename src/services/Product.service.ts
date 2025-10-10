import { PRODUCT_URL } from "@/config/api.config";
import ApiService from "./Api.service";
import { RequestParams, RequestHeaders } from "@/utils/apiCallers";
import { ProductApiResponse } from "@/types/product";

class ProductService extends ApiService<ProductApiResponse, never, RequestParams> {
  constructor() {
    super(PRODUCT_URL);
  }

  getProducts(params: RequestParams = {}, headers?: RequestHeaders): Promise<ProductApiResponse> {
    return this.get({ ...params } as RequestParams, { ...this._headers, ...headers });
  }
}

// Export instance
const productService = new ProductService();
export { productService };
export default productService;
