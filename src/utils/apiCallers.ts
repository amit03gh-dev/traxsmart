import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  CancelTokenSource,
  InternalAxiosRequestConfig,
} from "axios";
import axiosInt from "./axios";

// Error shape (customize to match your backend)
export interface ApiError<T = unknown> {
  status?: number;
  message?: string;
  data?: T;
}

// Allow plain objects or AxiosHeaders
export type RequestHeaders = AxiosRequestConfig["headers"];
export type RequestParams = Record<string, string | number | boolean | null>;

// 🔹 Interceptors
axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = axiosInt.defaults.headers.common.Authorization;

    if (token && config.headers && !config.headers.Authorization) {
      config.headers.Authorization = token as string;
    }

    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error: AxiosError<ApiError>) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<ApiError>) => Promise.reject(error)
);

// 🔹 API Callers
export async function doPost<
  Res,
  Payload = unknown,
  Params extends RequestParams = RequestParams
>(
  url: string,
  payload?: Payload,
  params?: Params,
  headers?: RequestHeaders,
  cancelToken?: CancelTokenSource
): Promise<Res> {
  if (cancelToken) await cancelToken.cancel();
  return axios
    .post<Res>(url, payload, { params, headers })
    .then(({ data }) => data)
    .catch((err: AxiosError<ApiError>) => Promise.reject(err.response?.data));
}

export async function doGet<
  Res,
  Params extends RequestParams = RequestParams
>(
  url: string,
  params?: Params,
  headers?: RequestHeaders,
  cancelToken?: CancelTokenSource,
  options: AxiosRequestConfig = {}
): Promise<Res> {
  return axios
    .get<Res>(url, { params, headers, cancelToken: cancelToken?.token, ...options })
    .then(({ data }) => data)
    .catch((err: AxiosError<ApiError>) => Promise.reject(err.response?.data));
}

export async function doGetById<
  Res,
  Params extends RequestParams = RequestParams
>(
  url: string,
  params?: Params,
  headers?: RequestHeaders,
  cancelToken?: CancelTokenSource
): Promise<Res> {
  if (cancelToken) await cancelToken.cancel();
  return axios
    .get<Res>(url, { params, headers })
    .then(({ data }) => {
      const d = data as unknown as { data: Res[] };
      return { ...(data as object), data: d.data[0] } as Res;
    })
    .catch((err: AxiosError<ApiError>) => Promise.reject(err.response?.data));
}

export async function doPut<
  Res,
  Payload = unknown,
  Params extends RequestParams = RequestParams
>(
  url: string,
  payload?: Payload,
  params?: Params,
  headers?: RequestHeaders,
  cancelToken?: CancelTokenSource
): Promise<Res> {
  if (cancelToken) await cancelToken.cancel();
  return axios
    .put<Res>(url, payload, { params, headers })
    .then(({ data }) => data)
    .catch((err: AxiosError<ApiError>) => Promise.reject(err.response?.data));
}

export async function doDelete<
  Res,
  Params extends RequestParams = RequestParams
>(
  url: string,
  params?: Params,
  headers?: RequestHeaders,
  cancelToken?: CancelTokenSource
): Promise<Res> {
  if (cancelToken) await cancelToken.cancel();
  return axios
    .delete<Res>(url, { params, headers })
    .then(({ data }) => data)
    .catch((err: AxiosError<ApiError>) => Promise.reject(err.response?.data));
}

export async function doPatch<
  Res,
  Payload = unknown,
  Params extends RequestParams = RequestParams
>(
  url: string,
  payload?: Payload,
  params?: Params,
  headers?: RequestHeaders,
  cancelToken?: CancelTokenSource
): Promise<Res> {
  if (cancelToken) await cancelToken.cancel();
  return axios
    .patch<Res>(url, payload, { params, headers })
    .then(({ data }) => data)
    .catch((err: AxiosError<ApiError>) =>
      Promise.reject(err.response?.data?.message ?? err.response?.data)
    );
}

// Export bundle
const ApiCallers = {
  doPost,
  doGet,
  doGetById,
  doPut,
  doPatch,
  doDelete,
};

export default ApiCallers;
