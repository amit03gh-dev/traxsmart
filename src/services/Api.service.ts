import joinUrlPath from "@/utils/joinUrlPath";
import {
  doPost,
  doGet,
  doGetById,
  doPut,
  doPatch,
  doDelete,
  RequestParams,
  RequestHeaders,
} from "@/utils/apiCallers";
import axios, { CancelTokenSource } from "axios";

export const getDefaultParams = (): RequestParams => ({
  Referer: "https://vltd.traxsmart.in/",
  "Referrer-Policy": "strict-origin-when-cross-origin",
});

export const getDefaultHeaders = (): RequestHeaders => ({
  Referer: "https://vltd.traxsmart.in/",
  "Referrer-Policy": "strict-origin-when-cross-origin",
});

class ApiService<
  Res = unknown,
  Payload = unknown,
  Params extends RequestParams = RequestParams
> {
  protected _url: string;
  protected _headers: RequestHeaders;
  protected cancelToken: CancelTokenSource;

  constructor(url: string, headers: RequestHeaders = {}) {
    this._url = url;
    this._headers = { ...getDefaultHeaders(), ...headers };
    this.cancelToken = axios.CancelToken.source();
    console.log(`[ApiService] Initialized with URL: ${this._url}`);
  }

  post(payload?: Payload, params?: Params, headers?: RequestHeaders): Promise<Res> {
    return doPost<Res, Payload, Params>(this._url, payload, params, {
      ...this._headers,
      ...headers,
    });
  }

  get(params?: Params, headers?: RequestHeaders, noOrgId?: boolean): Promise<Res> {
    // console.log("API called at:>>>>>>>>>>>>>>>>>>>>>>>>>", new Date().toISOString());
    const _params: Params = {
      ...(params as Params),
      ...(getDefaultParams() as Params),
    };

    if (noOrgId && "organizationId" in _params) {
      delete (_params as Record<string, unknown>)["organizationId"];
    }

    return doGet<Res, Params>(
      this._url,
      _params,
      { ...this._headers, ...headers },
      this.cancelToken
    );
  }

getById(id: string | number, params?: Params, headers?: RequestHeaders): Promise<Res> {
  const url = joinUrlPath(this._url, id);
 console.log("URL", url);
  return doGetById<Res, Params>(
    url,
    params,
    { ...this._headers, ...headers },
    this.cancelToken
  );
}



  put(id: string | number, payload?: Payload, params?: Params, headers?: RequestHeaders): Promise<Res> {
    return doPut<Res, Payload, Params>(
      joinUrlPath(this._url, id),
      payload,
      params,
      { ...this._headers, ...headers }
    );
  }

  delete(id?: string | number, params?: Params, headers?: RequestHeaders): Promise<Res> {
    const url = id ? joinUrlPath(this._url, id) : this._url;
    return doDelete<Res, Params>(url, params, {
      ...this._headers,
      ...headers,
    });
  }

  patch(id: string | number, payload?: Payload, params?: Params, headers?: RequestHeaders): Promise<Res> {
    return doPatch<Res, Payload, Params>(
      joinUrlPath(this._url, id),
      payload,
      params,
      { ...this._headers, ...headers }
    );
  }
}

export default ApiService;
