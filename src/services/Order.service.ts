import { ORDER_URL } from "@/config/api.config";
import ApiService from "./Api.service";
import { RequestParams, RequestHeaders } from "@/utils/apiCallers";

// Example: Define types for your order
export interface Order {
  id: string;
  status: string;
  amount: number;
}

export interface UpdateOrderPayload {
  status?: string;
  amount?: number;
}

class OrderService extends ApiService<Order, UpdateOrderPayload, RequestParams> {
  constructor() {
    super(ORDER_URL);
  }

  getOrderById(
    id: string | number,
    params: RequestParams = {},
    headers?: RequestHeaders
  ): Promise<Order> {
    return this.get(
      { ...params, _id: id } as RequestParams,
      { ...this._headers, ...headers }
    );
  }

  updateOrder(
    id: string | number,
    payload: UpdateOrderPayload,
    headers?: RequestHeaders
  ): Promise<Order> {
    return this.put(id, payload, {}, { ...this._headers, ...headers });
  }
}

// ✅ Assign to a variable before export
const orderService = new OrderService();

export { orderService };
export default orderService;
