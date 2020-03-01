import request from '@/utils/request';
import { stringify } from 'qs';
import {
  LedgerListParamsType,
  LedgerDetailParamsType,
  LedgerChangeParamsType,
  LedgerStateParamsType,
  LedgerStepParamsType,
  LedgerGoodsListParamsType,
  LedgerGoodsCreateParamsType,
  LedgerGoodsChangeParamsType,
  LedgerGoodsDeleteParamsType,
  LedgerShListParamsType,
  LedgerShCreateParamsType,
  LedgerShChangeParamsType,
  LedgerShDeleteParamsType,
} from '@/interfaces/trade';

// 退税结算列表接口
export async function ledgerList(params: LedgerListParamsType) {
  return request(`/api/trade/cost/ledgers?${stringify(params)}`);
}

// 退税结算详情接口
export async function ledgerDetail(params: LedgerDetailParamsType) {
  const { ledgerToken } = params;
  return request(`/api/trade/cost/ledger/${ledgerToken}/detail`);
}

// 退税结算修改接口
export async function ledgerChange(params: LedgerChangeParamsType) {
  const { ledgerToken, submit, ledger } = params;
  return request(`/api/trade/cost/ledger/${ledgerToken}?${stringify(submit)}`, {
    method: 'PUT',
    data: ledger,
  });
}

// 退税结算状态接口
export async function ledgerState(params: LedgerStateParamsType) {
  const { ledgerToken, val } = params;
  return request(`/api/trade/cost/ledger/${ledgerToken}/state?${stringify(val)}`, {
    method: 'PUT',
  });
}

// 退税结算进度接口
export async function ledgerStep(params: LedgerStepParamsType) {
  const { ledgerToken, ledgerStep } = params;
  return request(`/api/trade/cost/ledger/${ledgerToken}/step/${ledgerStep}`, {
    method: 'PUT',
  });
}

// 商品列表接口
export async function ledgerGoodsList(params: LedgerGoodsListParamsType) {
  const { ledgerToken } = params;
  return request(`/api/trade/cost/ledger/${ledgerToken}/goodses`);
}

// 商品创建接口
export async function ledgerGoodsCreate(params: LedgerGoodsCreateParamsType) {
  const { ledgerToken, ledgerItem } = params;
  return request(`/api/trade/cost/ledger/${ledgerToken}/goods`, {
    method: 'POST',
    data: ledgerItem,
  });
}

// 商品修改接口
export async function ledgerGoodsChange(params: LedgerGoodsChangeParamsType) {
  const { ledgerToken, ledgerItemToken, ledgerItem } = params;
  return request(`/api/trade/cost/ledger/${ledgerToken}/goods/${ledgerItemToken}`, {
    method: 'PUT',
    data: ledgerItem,
  });
}

// 商品删除接口
export async function ledgerGoodsDelete(params: LedgerGoodsDeleteParamsType) {
  const { ledgerToken, ledgerItemToken } = params;
  return request(`/api/trade/cost/legder/${ledgerToken}/goods/${ledgerItemToken}`, {
    method: 'Delete',
  });
}

// 收汇列表接口
export async function ledgerShList(params: LedgerShListParamsType) {
  const { ledgerToken, ledgerItemToken } = params;
  return request(`/api/trade/cost/ledger/${ledgerToken}/goods/${ledgerItemToken}/shs`);
}

// 收汇创建接口
export async function ledgerShCreate(params: LedgerShCreateParamsType) {
  const { ledgerToken, ledgerItemToken, ledgerSh } = params;
  return request(`/api/trade/cost/ledger/${ledgerToken}/goods/${ledgerItemToken}/sh`, {
    method: 'POST',
    data: ledgerSh,
  });
}

// 收汇修改接口
export async function ledgerShChange(params: LedgerShChangeParamsType) {
  const { ledgerToken, ledgerItemToken, ledgerShToken, ledgerSh } = params;
  return request(
    `/api/trade/cost/ledger/${ledgerToken}/goods/${ledgerItemToken}/sh/${ledgerShToken}`,
    {
      method: 'PUT',
      data: ledgerSh,
    },
  );
}

// 收汇删除接口
export async function ledgerShDelete(params: LedgerShDeleteParamsType) {
  const { ledgerToken, ledgerItemToken, ledgerShToken } = params;
  return request(
    `/api/trade/cost/ledger/${ledgerToken}/goods/${ledgerItemToken}/sh/${ledgerShToken}`,
    {
      method: 'Delete',
    },
  );
}
