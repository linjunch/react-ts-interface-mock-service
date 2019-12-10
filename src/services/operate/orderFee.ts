import request from '@/utils/request';
import { stringify } from 'qs';
import {
  OrderFeeListParamsType,
  OrderFeeDetailParamsType,
  OrderFeeCreateParamsType,
  OrderFeeChangeParamsType,
  OrderFeeSrepParamsType,
} from '@/interfaces/operate';

// 订单结算列表接口
export async function orderFeeList(params: OrderFeeListParamsType) {
  return request(`/api/operator/cost/orderFees?${stringify(params)}`);
}
// 订单结算详情接口
export async function orderFeeDetail(params: OrderFeeDetailParamsType) {
  const { orderFeeToken } = params;
  return request(`/api/operator/cost/orderFee/${orderFeeToken}/detail`);
}
// 订单结算创建接口
export async function orderFeeCreate(params: OrderFeeCreateParamsType) {
  const { submit, orderFee } = params;
  return request(`/api/operator/cost/orderFee?${stringify(submit)}`, {
    method: 'POST',
    data: orderFee,
  });
}
// 订单结算修改接口
export async function orderFeeChange(params: OrderFeeChangeParamsType) {
  const { orderFeeToken, submit, orderFee } = params;
  return request(`/api/operator/cost/orderFee/${orderFeeToken}?${stringify(submit)}`, {
    method: 'PUT',
    data: orderFee,
  });
}
// 订单结算审核接口
export async function orderFeeSrep(params: OrderFeeSrepParamsType) {
  const { orderFeeToken, checkStep } = params;
  return request(
    `/api/operator/cost/orderFee/${orderFeeToken}/step/${checkStep}
  `,
    {
      method: 'PUT',
    },
  );
}
