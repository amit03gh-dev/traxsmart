import { HOME_URL} from "@/config/api.config";
import ApiService from "./Api.service";
import { RequestParams, RequestHeaders } from "@/utils/apiCallers";
import { ApiResponse } from "@/types/home";

// Example: Define types for your order


class HomeService extends ApiService<ApiResponse, RequestParams> {
  constructor() {
    super(HOME_URL);
  }

  getProducts(
    params: RequestParams = {},
    headers?: RequestHeaders
  ): Promise<ApiResponse> {
    return this.get(
      { ...params } as RequestParams,
      { ...this._headers, ...headers }
    );
  }
}

// Assign to a variable before export
const homeService = new HomeService();

export { homeService };
export default homeService;
