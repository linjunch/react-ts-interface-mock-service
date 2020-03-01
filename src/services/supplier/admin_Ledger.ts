import request from '@/utils/request';
import { stringify } from 'qs';
import {
  LedgerListParamsType,
  LedgerDetailParamsType,
  LedgerGoodsListParamsType,
  LedgerShListParamsType,
} from '@/interfaces/supplier';

// 退税结算列表接口
export async function ledgerList(params: LedgerListParamsType) {
  return request(`/api/supplier/admin/ledgers?${stringify(params)}`);
}

// 退税结算详情接口
export async function ledgerDetail(params: LedgerDetailParamsType) {
  const { ledgerToken } = params;
  return request(`/api/supplier/admin/ledger/${ledgerToken}/detail`);
}

// 商品列表接口
export async function ledgerGoodsList(params: LedgerGoodsListParamsType) {
  const { ledgerToken } = params;
  return request(`/api/supplier/admin/ledger/${ledgerToken}/goodses`);
}

// 收汇列表接口
export async function ledgerShList(params: LedgerShListParamsType) {
  const { ledgerToken, ledgerItemToken } = params;
  return request(`/api/supplier/admin/ledger/${ledgerToken}/goods/${ledgerItemToken}/shs`);
}
