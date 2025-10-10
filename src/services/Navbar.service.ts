import { NAVBAR_URL } from "@/config/api.config";
import ApiService from "./Api.service";
import { RequestParams, RequestHeaders } from "@/utils/apiCallers";
import { NavbarApiResponse} from "@/types/navbar";

class NavbarService extends ApiService<NavbarApiResponse, never, RequestParams> {
  constructor() {
    super(NAVBAR_URL);
  }

  getNavbar(params: RequestParams = {}, headers?: RequestHeaders): Promise<NavbarApiResponse> {
    return this.get({ ...params } as RequestParams, { ...this._headers, ...headers });
  }
}

// ✅ Export instance
const navbarService = new NavbarService();
export { navbarService };
export default navbarService;
