import request from '@/utils/request';
import { stringify } from 'qs';
import { AdminVouchersListParamsType, AdminVouchersDetailParamsType } from '@/interfaces/supplier';

// 凭证列表接口
export async function adminVouchersList(params: AdminVouchersListParamsType) {
  return request(`/api/supplier/admin/vouchers?${stringify(params)}`);
}

// 凭证详情接口
export async function adminVouchersDetail(params: AdminVouchersDetailParamsType) {
  const { voucherToken } = params;
  return request(`/api/supplier/admin/voucher/${voucherToken}/detail`);
}
