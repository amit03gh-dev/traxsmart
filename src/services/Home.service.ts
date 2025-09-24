import { ORDER_URL } from "@/config/api.config";
import ApiService from "./Api.service";
import { RequestParams, RequestHeaders } from "@/utils/apiCallers";

// Example: Define types for your order
export interface Products {
  id: string;
  status: string;
  amount: number;
}

export interface UpdateOrderPayload {
  status?: string;
  amount?: number;
}

class HomeService extends ApiService<Products, UpdateOrderPayload, RequestParams> {
  constructor() {
    super(ORDER_URL);
  }

  getProducts(
    params: RequestParams = {},
    headers?: RequestHeaders
  ): Promise<Products> {
    return this.get(
      { ...params } as RequestParams,
      { ...this._headers, ...headers }
    );
  }
}

// ✅ Assign to a variable before export
const homeService = new HomeService();

export { homeService };
export default homeService;
