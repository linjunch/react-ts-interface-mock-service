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
export async function OrderList(params: OrderListParamsType) {
  return request(`/api/supplier/sales/orders?${stringify(params)}`);
}

// 订单详情接口
export async function OrderDetail(params: OrderDetailParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/detail`);
}

// 订单创建接口
export async function OrderCreate(params: OrderCreateParamsType) {
  const { submit, order } = params;
  return request(`/api/supplier/sales/order?${stringify(submit)}`, {
    method: 'POST',
    data: order,
  });
}

// 订单修改接口
export async function OrderChange(params: OrderChangeParamsType) {
  const { orderToken, submit, order } = params;
  return request(`/api/supplier/sales/order/${orderToken}?${stringify(submit)}`, {
    method: 'PUT',
    data: order,
  });
}

// 唛头修改接口
export async function ShippingMarks(params: ShippingMarksParamsType) {
  const { orderToken, container } = params;
  return request(`/api/supplier/sales/order/${orderToken}/step/container`, {
    method: 'PUT',
    data: container,
  });
}

// 资源下载接口
export async function Downlaod(params: DownlaodParamsType) {
  const { orderToken, Type } = params;
  return request(`/api/supplier/sales/order/${orderToken}/downlaod?${stringify(Type)}`);
}

// 商品列表接口
export async function GoodsList(params: GoodsListParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/goodses`);
}

// 商品创建接口
export async function GoodsCreate(params: GoodsCreateParamsType) {
  const { orderToken, goods } = params;
  return request(`/api/supplier/sales/order/${orderToken}/goods`, {
    method: 'POST',
    data: goods,
  });
}

// 商品修改接口
export async function GoodsChange(params: GoodsChangeParamsType) {
  const { orderToken, goodsToken, goods } = params;
  return request(`/api/supplier/sales/order/${orderToken}/goods/${goodsToken}`, {
    method: 'PUT',
    data: goods,
  });
}

// 商品删除接口
export async function GoodsDelete(params: GoodsDeleteParamsType) {
  const { orderToken, goodsToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/goods/${goodsToken}`, {
    method: 'Delete ',
  });
}

// 装柜列表接口
export async function ContainerList(params: ContainerListParamsType) {
  const { orderToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/containers`);
}

// 装柜创建接口
export async function ContainerCreate(params: ContainerCreateParamsType) {
  const { orderToken, submit, container } = params;
  return request(`/api/supplier/sales/order/${orderToken}/container?${stringify(submit)}`, {
    method: 'POST',
    data: container,
  });
}

// 装柜修改接口
export async function ContainerChange(params: ContainerChangeParamsType) {
  const { orderToken, containerToken, container } = params;
  return request(`/api/supplier/sales/order/${orderToken}/container/${containerToken}`, {
    method: 'PUT',
    data: container,
  });
}

// 装柜删除接口
export async function ContainerDelete(params: ContainerDeleteParamsType) {
  const { orderToken, containerToken } = params;
  return request(`/api/supplier/sales/order/${orderToken}/container/${containerToken}`, {
    method: 'Delete ',
  });
}
