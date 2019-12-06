import { OrderAttrType } from '../global';

// 订单基础统计接口
export interface OrderBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface OrderBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 订单增长分析接口
export interface OrderIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface OrderIncreaseBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 订单属性分布接口
export interface OrderAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface OrderAttrBaseResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 出口额基础统计接口
export interface ExAmtBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface ExAmtBaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}

// 出口额增长分析接口
export interface ExAmtIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface ExAmtIncreaseBaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}

// 出口额属性分布接口
export interface ExAmtAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface ExAmtAttrBaseResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 出口量基础统计接口
export interface ExSumBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface ExSumBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 出口量增长分析接口
export interface ExSumIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface ExSumIncreaseBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 出口量属性分布接口
export interface ExSumAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface ExSumAttrBaseResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 供应商基础统计接口
export interface SupplierBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface SupplierBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 供应商增长分析接口
export interface SupplierIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface SupplierIncreaseBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 供应商属性分布接口
export interface SupplierAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface SupplierAttrBaseResType {
  name?: string;
  value?: number;
  ratio?: number;
}
