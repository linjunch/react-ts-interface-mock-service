import request from '@/utils/request';
import { stringify } from 'qs';
import {
  OrderListParamsType,
  OrderDetailParamsType,
  GoodsListParamsType,
  ContainerListParamsType,
} from '@/interfaces/trade';

// 订单列表接口
export async function orderList(params: OrderListParamsType) {
  return request(`/api/trade/admin/orders?${stringify(params)}`);
}

// 订单详情接口
export async function orderDetail(params: OrderDetailParamsType) {
  const { orderToken } = params;
  return request(`/api/trade/admin/order/${orderToken}/detail`);
}

// 商品列表接口
export async function goodsList(params: GoodsListParamsType) {
  const { orderToken } = params;
  return request(`/api/trade/admin/order/${orderToken}/goodses`);
}

// 装柜列表接口
export async function containerList(params: ContainerListParamsType) {
  const { orderToken } = params;
  return request(`/api/trade/admin/order/${orderToken}/containers`);
}
