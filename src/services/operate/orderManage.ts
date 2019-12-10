import request from '@/utils/request';
import { stringify } from 'qs';
import {
  OrderListParamsType,
  OrderDetailParamsType,
  OrderStepParamsType,
  OrederGoodsListParamsType,
  ContainerListParamsType,
} from '@/interfaces/operate';
// 订单列表接口
export async function orderList(params: OrderListParamsType) {
  return request(`/api/operator/service/orders?${stringify(params)}`);
}
// 订单详情接口
export async function orderDetail(params: OrderDetailParamsType) {
  const { orderToken } = params;
  return request(`/api/operator/service/order/${orderToken}/detail`);
}
// 订单进度接口
export async function orderStep(params: OrderStepParamsType) {
  const { orderToken, orderStep } = params;
  return request(`/api/operator/service/order/${orderToken}/step/${orderStep}`, {
    method: 'PUT',
  });
}
// 商品列表接口
export async function orederGoodsList(params: OrederGoodsListParamsType) {
  const { orderToken } = params;
  return request(`/api/operator/service/order/${orderToken}/goodses`);
}
// 装柜列表接口
export async function containerList(params: ContainerListParamsType) {
  const { orderToken } = params;
  return request(`/api/operator/service/order/${orderToken}/containers`);
}
