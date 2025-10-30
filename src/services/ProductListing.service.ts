import { PRODUCT_LIST_URL, PRODUCT_URL } from "@/config/api.config";
import ApiService from "./Api.service";
import { RequestParams, RequestHeaders } from "@/utils/apiCallers";
import { ProductListApiResponse } from "@/types/productListing";

class ProductListingService extends ApiService<ProductListApiResponse, never, RequestParams> {
  constructor() {
    super(PRODUCT_LIST_URL);
  }

  getProductById(id: string | number, params?: RequestParams, headers?: RequestHeaders): Promise<ProductListApiResponse> {
    return this.getById(id, params, headers);
  }
}


// Export instance
const productListingService = new ProductListingService();
export { productListingService };
export default productListingService;
