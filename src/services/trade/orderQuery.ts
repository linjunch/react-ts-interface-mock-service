import request from '@/utils/request';
import { stringify } from 'qs';
import {
  CustomerOrderListParamsType,
  CustomerOrderDetailParamsType,
  CustomerGoodsListParamsType,
  CustomerContainerListParamsType,
} from '@/interfaces/trade';

// 订单列表接口
export async function customerOrderList(params: CustomerOrderListParamsType) {
  return request(`/api/trade/sales/orders${stringify(params)}`);
}

// 订单详情接口
export async function customerOrderDetail(params: CustomerOrderDetailParamsType) {
  const { orderToken } = params;
  return request(`/api/trade/sales/order/${orderToken}/detail`);
}

// 商品列表接口
export async function customerGoodsList(params: CustomerGoodsListParamsType) {
  const { orderToken } = params;
  return request(`/api/trade/sales/order/${orderToken}/goodses`);
}

// 装柜列表接口
export async function customerContainerList(params: CustomerContainerListParamsType) {
  const { orderToken } = params;
  return request(`/api/trade/sales/order/${orderToken}/containers`);
}
