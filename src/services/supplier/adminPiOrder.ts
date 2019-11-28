import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminPiOrderListParamsType,
  AdminPiOrderDetailParamsType,
  AdminPiOrderSendParamsType,
  AdminPiGoodsListParamsType,
  AdminPiContainerListParamsType,
} from '@/interfaces/supplier';

// 订单列表接口
export async function adminPiOrderList(params: AdminPiOrderListParamsType) {
  return request(`/api/supplier/admin/orders?${stringify(params)}`);
}

// 订单详情接口
export async function adminPiOrderDetail(params: AdminPiOrderDetailParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/admin/order/${orderToken}/detail`);
}

// 订单发送接口
export async function adminPiOrderSend(params: AdminPiOrderSendParamsType) {
  const { orderToken } = params;
  return request(`/api//supplier/admin/order/${orderToken}/step/send`, {
    method: 'PUT',
  });
}

// 商品列表接口
export async function adminPiGoodsList(params: AdminPiGoodsListParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/admin/order/${orderToken}/goodses`);
}

// 装柜列表接口
export async function adminPiContainerList(params: AdminPiContainerListParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/admin/order/${orderToken}/containers`);
}
