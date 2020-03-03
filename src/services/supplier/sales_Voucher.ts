import request from '@/utils/request';
import { stringify } from 'qs';
import {
  VoucherListParamsType,
  VoucherDetailParamsType,
  VoucherCreateParamsType,
  VoucherDeleteParamsType,
} from '@/interfaces/supplier';

// 凭证列表接口
export async function voucherList(params: VoucherListParamsType) {
  return request(`/api/supplier/sales/vouchers?${stringify(params)}`);
}

// 凭证详情接口
export async function voucherDetail(params: VoucherDetailParamsType) {
  const { voucherToken } = params;
  return request(`/api/supplier/sales/voucher/${voucherToken}/detail`);
}

// 凭证创建接口
export async function voucherCreate(params: VoucherCreateParamsType) {
  const { submit, order } = params;
  return request(`/api/supplier/sales/voucher?${stringify(submit)}`, {
    method: 'POST',
    data: order,
  });
}

// 凭证删除接口
export async function voucherDelete(params: VoucherDeleteParamsType) {
  const { voucherToken } = params;
  return request(`/api/supplier/sales/voucher/${voucherToken}`, {
    method: 'Delete',
  });
}
