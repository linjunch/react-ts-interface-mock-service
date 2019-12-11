import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminOrderListParamsType,
  AdminOrderDetailParamsType,
  AdminGoodsListParamsType,
  AdminContainerListParamsType,
  AdminOrderLockParamsType,
} from '@/interfaces/operate';

// 订单列表接口
export async function adminOrderList(params: AdminOrderListParamsType) {
  return request(`/api/operator/admin/orders?${stringify(params)}`);
}
// 订单详情接口
export async function adminOrderDetail(params: AdminOrderDetailParamsType) {
  const { orderToken } = params;
  return request(`/api/operator/admin/order/${orderToken}/detail`);
}
// 商品列表接口
export async function adminGoodsList(params: AdminGoodsListParamsType) {
  const { orderToken } = params;
  return request(`/api/operator/admin/order/${orderToken}/goodses`);
}
// 装柜列表接口
export async function adminContainerList(params: AdminContainerListParamsType) {
  const { orderToken } = params;
  return request(`/api/operator/admin/order/${orderToken}/containers`);
}
// 订单锁接口
export async function adminOrderLock(params: AdminOrderLockParamsType) {
  const { orderToken, lockStatus } = params;
  return request(`/api/operator/admin/order/${orderToken}/${lockStatus}`, {
    method: 'PUT',
  });
}
