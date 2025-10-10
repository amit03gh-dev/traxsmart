import { FOOTER_URL } from "@/config/api.config";
import ApiService from "./Api.service";
import { RequestParams, RequestHeaders } from "@/utils/apiCallers";
import { FooterApiResponse } from "@/types/footer";

class NavbarService extends ApiService<FooterApiResponse, never, RequestParams> {
  constructor() {
    super(FOOTER_URL);
  }

  getFooterData(params: RequestParams = {}, headers?: RequestHeaders): Promise<FooterApiResponse> {
    return this.get({ ...params } as RequestParams, { ...this._headers, ...headers });
  }
}

// ✅ Export instance
const footerService = new NavbarService();
export { footerService };
export default footerService;
