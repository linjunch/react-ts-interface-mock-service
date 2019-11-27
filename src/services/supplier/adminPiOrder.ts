import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminOrderListParamsType,
  AdminOrderDetailParamsType,
  AdminOrderSendParamsType,
  AdminGoodsListParamsType,
  AdminContainerListParamsType,
} from '@/interfaces/supplier';

// 订单列表接口
export async function adminOrderList(params: AdminOrderListParamsType) {
  return request(`/api/supplier/admin/orders?${stringify(params)}`);
}

// 订单详情接口
export async function adminOrderDetail(params: AdminOrderDetailParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/admin/order/${orderToken}/detail`);
}

// 订单发送接口
export async function adminOrderSend(params: AdminOrderSendParamsType) {
  const { orderToken } = params;
  return request(`/api//supplier/admin/order/${orderToken}/step/send`, {
    method: 'PUT',
  });
}

// 商品列表接口
export async function adminGoodsList(params: AdminGoodsListParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/admin/order/${orderToken}/goodses`);
}

// 装柜列表接口
export async function adminContainerList(params: AdminContainerListParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/admin/order/${orderToken}/containers`);
}
