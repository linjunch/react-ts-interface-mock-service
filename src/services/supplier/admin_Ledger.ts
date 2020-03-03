import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminLedgerListParamsType,
  AdminLedgerDetailParamsType,
  AdminLedgerGoodsListParamsType,
  AdminLedgerShListParamsType,
} from '@/interfaces/supplier';

// 退税结算列表接口
export async function adminLedgerList(params: AdminLedgerListParamsType) {
  return request(`/api/supplier/admin/ledgers?${stringify(params)}`);
}

// 退税结算详情接口
export async function adminLedgerDetail(params: AdminLedgerDetailParamsType) {
  const { ledgerToken } = params;
  return request(`/api/supplier/admin/ledger/${ledgerToken}/detail`);
}

// 商品列表接口
export async function adminLedgerGoodsList(params: AdminLedgerGoodsListParamsType) {
  const { ledgerToken } = params;
  return request(`/api/supplier/admin/ledger/${ledgerToken}/goodses`);
}

// 收汇列表接口
export async function adminLedgerShList(params: AdminLedgerShListParamsType) {
  const { ledgerToken, ledgerItemToken } = params;
  return request(`/api/supplier/admin/ledger/${ledgerToken}/goods/${ledgerItemToken}/shs`);
}
