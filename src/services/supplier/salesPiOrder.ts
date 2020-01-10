import request from '@/utils/request';
import { stringify } from 'qs';
import {
  OrderListParamsType,
  OrderDetailParamsType,
  OrderCreateParamsType,
  OrderChangeParamsType,
  ShippingMarksParamsType,
  DownlaodParamsType,
  GoodsListParamsType,
  GoodsCreateParamsType,
  GoodsChangeParamsType,
  GoodsDeleteParamsType,
  ContainerListParamsType,
  ContainerCreateParamsType,
  ContainerChangeParamsType,
  ContainerDeleteParamsType,
} from '@/interfaces/supplier';

// 订单列表接口
export async function orderList(params: OrderListParamsType) {
  return request(`/api/supplier/sales/orders?${stringify(params)}`);
}

// 订单详情接口
export async function orderDetail(params: OrderDetailParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/detail`);
}

// 订单创建接口
export async function orderCreate(params: OrderCreateParamsType) {
  const { submit, order } = params;
  return request(`/api/supplier/sales/order?${stringify(submit)}`, {
    method: 'POST',
    data: order,
  });
}

// 订单修改接口
export async function orderChange(params: OrderChangeParamsType) {
  const { orderToken, submit, order } = params;
  return request(`/api/supplier/sales/order/${orderToken}?${stringify(submit)}`, {
    method: 'PUT',
    data: order,
  });
}

// 唛头修改接口
export async function shippingMarks(params: ShippingMarksParamsType) {
  const { orderToken, container } = params;
  return request(`/api/supplier/sales/order/${orderToken}/mark`, {
    method: 'PUT',
    data: container,
  });
}

// 资源下载接口
export async function downlaod(params: DownlaodParamsType) {
  const { orderToken, Type } = params;
  return request(`/api/supplier/sales/order/${orderToken}/downlaod?${stringify(Type)}`);
}

// 商品列表接口
export async function goodsList(params: GoodsListParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/goodses`);
}

// 商品创建接口
export async function goodsCreate(params: GoodsCreateParamsType) {
  const { orderToken, goods } = params;
  return request(`/api/supplier/sales/order/${orderToken}/goods`, {
    method: 'POST',
    data: goods,
  });
}

// 商品修改接口
export async function goodsChange(params: GoodsChangeParamsType) {
  const { orderToken, goodsToken, goods } = params;
  return request(`/api/supplier/sales/order/${orderToken}/goods/${goodsToken}`, {
    method: 'PUT',
    data: goods,
  });
}

// 商品删除接口
export async function goodsDelete(params: GoodsDeleteParamsType) {
  const { orderToken, goodsToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/goods/${goodsToken}`, {
    method: 'Delete ',
  });
}

// 装柜列表接口
export async function containerList(params: ContainerListParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/containers`);
}

// 装柜创建接口
export async function containerCreate(params: ContainerCreateParamsType) {
  const { orderToken, submit, container } = params;
  return request(`/api/supplier/sales/order/${orderToken}/container?${stringify(submit)}`, {
    method: 'POST',
    data: container,
  });
}

// 装柜修改接口
export async function containerChange(params: ContainerChangeParamsType) {
  const { orderToken, containerToken, container } = params;
  return request(`/api/supplier/sales/order/${orderToken}/container/${containerToken}`, {
    method: 'PUT',
    data: container,
  });
}

// 装柜删除接口
export async function containerDelete(params: ContainerDeleteParamsType) {
  const { orderToken, containerToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/container/${containerToken}`, {
    method: 'Delete ',
  });
}
