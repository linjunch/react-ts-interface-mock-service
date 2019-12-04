import request from '@/utils/request';
import { stringify } from 'qs';
import {
  VoucherListParamsType,
  VoucherDetailParamsType,
  VoucherStepParamsType,
} from '@/interfaces/trade';

// 凭证列表接口
export async function voucherList(params: VoucherListParamsType) {
  return request(`/api/trade/cost/vouchers?${stringify(params)}`);
}

// 凭证详情接口
export async function voucherDetail(params: VoucherDetailParamsType) {
  const { voucherToken } = params;
  return request(`/api/trade/cost/voucher/${voucherToken}/detail`);
}

// 凭证审核接口
export async function voucherStep(params: VoucherStepParamsType) {
  const { voucherToken, val } = params;
  return request(`/api/trade/cost/voucher/${voucherToken}/step?${stringify(val)}`, {
    method: 'PUT',
  });
}
