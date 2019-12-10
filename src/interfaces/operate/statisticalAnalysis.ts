import { OrderFeeAttrtype } from '../global';

// 订单费用基础统计接口
export interface OrderFeeBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface OrderFeeBaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}
// 订单费用增长分析接口
export interface OrderFeeIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface OrderFeeIncreaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}
// 订单费用属性分布接口
export interface OrderFeeAttrParamsType {
  type: OrderFeeAttrtype;
  page?: number;
  size?: number;
}
export interface OrderFeeAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}
