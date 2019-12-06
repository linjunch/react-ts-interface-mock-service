import request from '@/utils/request';
import { stringify } from 'qs';
import {
  OrderBaseParamsType,
  OrderIncreaseParamsType,
  OrderAttrParamsType,
  ExAmtBaseParamsType,
  ExAmtIncreaseParamsType,
  ExAmtAttrParamsType,
  ExSumBaseParamsType,
  ExSumIncreaseParamsType,
  ExSumAttrParamsType,
  SupplierBaseParamsType,
  SupplierIncreaseParamsType,
  SupplierAttrParamsType,
} from '@/interfaces/trade';

// 订单基础统计接口
export async function orderBase(params: OrderBaseParamsType) {
  return request(`/api/trade/admin/data/order/base${stringify(params)}`);
}

// 订单增长分析接口
export async function orderIncrease(params: OrderIncreaseParamsType) {
  return request(`/api/trade/admin/data/order/increase?${stringify(params)}`);
}

// 订单属性分布接口
export async function orderAttr(params: OrderAttrParamsType) {
  return request(`/api/trade/admin/data/order/attr?${stringify(params)}`);
}

// 出口额基础统计接口
export async function exAmtBase(params: ExAmtBaseParamsType) {
  return request(`/api/trade/admin/data/exAmt/base${stringify(params)}`);
}

// 出口额增长分析接口
export async function exAmtIncrease(params: ExAmtIncreaseParamsType) {
  return request(`/api/trade/admin/data/exAmt/increase?${stringify(params)}`);
}

// 出口额属性分布接口
export async function exAmtAttr(params: ExAmtAttrParamsType) {
  return request(`/api/trade/admin/data/exAmt/attr?${stringify(params)}`);
}

// 出口量基础统计接口
export async function exSumBase(params: ExSumBaseParamsType) {
  return request(`/api/trade/admin/data/exSum/base${stringify(params)}`);
}

// 出口量增长分析接口
export async function exSumIncrease(params: ExSumIncreaseParamsType) {
  return request(`/api/trade/admin/data/exSum/increase?${stringify(params)}`);
}

// 出口量属性分布接口
export async function exSumAttr(params: ExSumAttrParamsType) {
  return request(`/api/trade/admin/data/exSum/attr?${stringify(params)}`);
}

// 供应商基础统计接口
export async function supplierBase(params: SupplierBaseParamsType) {
  return request(`/api/trade/admin/data/supplier/base${stringify(params)}`);
}

// 供应商增长分析接口
export async function supplierIncrease(params: SupplierIncreaseParamsType) {
  return request(`/api/trade/admin/data/supplier/increase?${stringify(params)}`);
}

// 供应商属性分布接口
export async function supplierAttr(params: SupplierAttrParamsType) {
  return request(`/api/trade/admin/data/supplier/attr?${stringify(params)}`);
}
