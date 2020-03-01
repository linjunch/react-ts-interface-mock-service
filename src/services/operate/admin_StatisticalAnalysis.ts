import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminSupplierBaseParamsType,
  AdminSupplierIncreaseParamsType,
  AdminSupplierAttrParamsType,
  AdminTradeBaseParamsType,
  AdminTradeIncreaseParamsType,
  AdminTradeAttrParamsType,
  AdminOwnerBaseParamsType,
  AdminOwnerIncreaseParamsType,
  AdminOwnerAttrParamsType,
  AdminFactoryBaseParamsType,
  AdminFactoryIncreaseParamsType,
  AdminFactoryAttrParamsType,
  AdminSaleBaseParamsType,
  AdminSaleIncreaseParamsType,
  AdminOrderBaseParamsType,
  AdminOrderIncreaseParamsType,
  AdminOrderAttrParamsType,
  AdminDeclareBaseParamsType,
  AdminDeclareIncreaseParamsType,
  AdminDeclareAttrParamsType,
  AdminExSumBaseParamsType,
  AdminExSumIncreaseParamsType,
  AdminExSumAttrParamsType,
  AdminExAmtBaseParamsType,
  AdminExAmtIncreaseParamsType,
  AdminExAmtAttrParamsType,
  AdminShBaseParamsType,
  AdminShIncreaseParamsType,
  AdminShAttrParamsType,
  AdminShAmtBaseParamsType,
  AdminShAmtIncreaseParamsType,
  AdminShAmtAttrParamsType,
  AdminLedgerBaseParamsType,
  AdminLedgerIncreaseParamsType,
  AdminLedgerAttrParamsType,
} from '@/interfaces/operate';

// 供应商基础统计接口
export async function adminSupplierBase(params: AdminSupplierBaseParamsType) {
  return request(`/api/operator/admin/data/supplier/base?${stringify(params)}`);
}
// 供应商增长统计接口
export async function adminSupplierIncrease(params: AdminSupplierIncreaseParamsType) {
  return request(`/api/operator/admin/data/supplier/increase?${stringify(params)}`);
}
// 供应商属性统计接口
export async function adminSupplierAttr(params: AdminSupplierAttrParamsType) {
  return request(`/api/operator/admin/data/supplier/attr?${stringify(params)}`);
}

// 外综服基础统计接口
export async function adminTradeBase(params: AdminTradeBaseParamsType) {
  return request(`/api/operator/admin/data/trade/base?${stringify(params)}`);
}
// 外综服增长统计接口
export async function adminTradeIncrease(params: AdminTradeIncreaseParamsType) {
  return request(`/api/operator/admin/data/trade/increase?${stringify(params)}`);
}
// 外综服属性统计接口
export async function adminTradeAttr(params: AdminTradeAttrParamsType) {
  return request(`/api/operator/admin/data/supplier/attr?${stringify(params)}`);
}

// 销售单位基础统计接口
export async function adminOwnerBase(params: AdminOwnerBaseParamsType) {
  return request(`/api/operator/admin/data/owner/base?${stringify(params)}`);
}
// 销售单位增长统计接口
export async function adminOwnerIncrease(params: AdminOwnerIncreaseParamsType) {
  return request(`/api/operator/admin/data/owner/increase?${stringify(params)}`);
}
// 销售单位属性统计接口
export async function adminOwnerAttr(params: AdminOwnerAttrParamsType) {
  return request(`/api/operator/admin/data/owner/attr?${stringify(params)}`);
}

// 生产单位基础统计接口
export async function adminFactoryBase(params: AdminFactoryBaseParamsType) {
  return request(`/api/operator/admin/data/factory/base?${stringify(params)}`);
}
// 生产单位增长统计接口
export async function adminFactoryIncrease(params: AdminFactoryIncreaseParamsType) {
  return request(`/api/operator/admin/data/factory/increase?${stringify(params)}`);
}
// 生产单位属性统计接口
export async function adminFactoryAttr(params: AdminFactoryAttrParamsType) {
  return request(`/api/operator/admin/data/factory/attr?${stringify(params)}`);
}

// 客服业务基础统计接口
export async function adminSaleBase(params: AdminSaleBaseParamsType) {
  return request(`/api/operator/admin/data/sale/base?${stringify(params)}`);
}
// 客服业务增长统计接口
export async function adminSaleIncrease(params: AdminSaleIncreaseParamsType) {
  return request(`/api/operator/admin/data/sale/increase?${stringify(params)}`);
}

// 订单基础统计接口
export async function adminOrderBase(params: AdminOrderBaseParamsType) {
  return request(`/api/operator/admin/data/order/base?${stringify(params)}`);
}
// 订单增长统计接口
export async function adminOrderIncrease(params: AdminOrderIncreaseParamsType) {
  return request(`/api/operator/admin/data/order/increase?${stringify(params)}`);
}
// 订单属性统计接口
export async function adminOrderAttr(params: AdminOrderAttrParamsType) {
  return request(`/api/operator/admin/data/order/attr?${stringify(params)}`);
}

// 关单基础统计接口
export async function adminDeclareBase(params: AdminDeclareBaseParamsType) {
  return request(`/api/operator/admin/data/declare/base?${stringify(params)}`);
}
// 关单增长统计接口
export async function adminDeclareIncrease(params: AdminDeclareIncreaseParamsType) {
  return request(`/api/operator/admin/data/declare/increase?${stringify(params)}`);
}
// 关单属性统计接口
export async function adminDeclareAttr(params: AdminDeclareAttrParamsType) {
  return request(`/api/operator/admin/data/declare/attr?${stringify(params)}`);
}

// 出口量基础统计接口
export async function adminExSumBase(params: AdminExSumBaseParamsType) {
  return request(`/api/operator/admin/data/exSum/base?${stringify(params)}`);
}
// 出口量增长统计接口
export async function adminExSumIncrease(params: AdminExSumIncreaseParamsType) {
  return request(`/api/operator/admin/data/exSum/increase?${stringify(params)}`);
}
// 出口量属性统计接口
export async function adminExSumAttr(params: AdminExSumAttrParamsType) {
  return request(`/api/operator/admin/data/exSum/attr?${stringify(params)}`);
}

// 出口额基础统计接口
export async function adminExAmtBase(params: AdminExAmtBaseParamsType) {
  return request(`/api/operator/admin/data/exAmt/base?${stringify(params)}`);
}
// 出口额增长统计接口
export async function adminExAmtIncrease(params: AdminExAmtIncreaseParamsType) {
  return request(`/api/operator/admin/data/exAmt/increase?${stringify(params)}`);
}
// 出口额属性统计接口
export async function adminExAmtAttr(params: AdminExAmtAttrParamsType) {
  return request(`/api/operator/admin/data/exAmt/attr?${stringify(params)}`);
}

// 收汇量基础统计接口
export async function adminShBase(params: AdminShBaseParamsType) {
  return request(`/api/operator/admin/data/sh/base?${stringify(params)}`);
}
// 收汇量增长统计接口
export async function adminShIncrease(params: AdminShIncreaseParamsType) {
  return request(`/api/operator/admin/data/sh/increase?${stringify(params)}`);
}
// 收汇量属性统计接口
export async function adminShAttr(params: AdminShAttrParamsType) {
  return request(`/api/operator/admin/data/sh/attr?${stringify(params)}`);
}

// 收汇额基础统计接口
export async function adminShAmtBase(params: AdminShAmtBaseParamsType) {
  return request(`/api/operator/admin/data/shAmt/base?${stringify(params)}`);
}
// 收汇额增长统计接口
export async function adminShAmtIncrease(params: AdminShAmtIncreaseParamsType) {
  return request(`/api/operator/admin/data/shAmt/increase?${stringify(params)}`);
}
// 收汇额属性统计接口
export async function adminShAmtAttr(params: AdminShAmtAttrParamsType) {
  return request(`/api/operator/admin/data/shAMt/attr?${stringify(params)}`);
}

// 退税基础统计接口
export async function adminLedgerBase(params: AdminLedgerBaseParamsType) {
  return request(`/api/operator/admin/data/ledger/base?${stringify(params)}`);
}
// 退税增长统计接口
export async function adminLedgerIncrease(params: AdminLedgerIncreaseParamsType) {
  return request(`/api/operator/admin/data/ledger/increase?${stringify(params)}`);
}
// 退税属性统计接口
export async function adminLedgerAttr(params: AdminLedgerAttrParamsType) {
  return request(`/api/operator/admin/data/ledger/attr?${stringify(params)}`);
}
