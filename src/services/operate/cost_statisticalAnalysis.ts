import request from '@/utils/request';
import { stringify } from 'qs';
import {
  OrderFeeBaseParamsType,
  OrderFeeIncreaseParamsType,
  OrderFeeAttrParamsType,
} from '@/interfaces/operate';

// 订单费用基础统计接口
export async function orderFeeBase(params: OrderFeeBaseParamsType) {
  return request(`/api/operator/cost/data/orderFee/base?${stringify(params)}`);
}
// 订单费用增长分析接口
export async function orderFeeIncrease(params: OrderFeeIncreaseParamsType) {
  return request(`/api/operator/cost/data/orderFee/increase?${stringify(params)}`);
}
// 订单费用属性分布接口
export async function rderFeeAttr(params: OrderFeeAttrParamsType) {
  return request(`/api/operator/cost/data/orderFee/attr?${stringify(params)}`);
}
