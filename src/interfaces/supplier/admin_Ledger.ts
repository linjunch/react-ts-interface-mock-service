import {
  StatusType,
  LedgerStepType,
  SortType,
  ServiceType,
} from '../global';

// 退税结算列表接口
export interface LedgerListParamsType {
  exDateL?: string;
  exDateU?: string;
  insDateL?: string;
  insDateU?: string;
  ownerName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: LedgerStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface LedgerListResType {
  id?: number;
  ledgerCode?: string;
  ownerName?: string;
  orderCode?: string;
  cusContrNo?: string;
  exDate?: string;
  insDate?: string;
  status?: StatusType;
  step?: LedgerStepType;
}

// 退税结算详情接口
export interface LedgerDetailParamsType {
  ledgerToken: number;
}
export interface LedgerDetailResType {
  ledgerCode?: string;
  orderCode?: string;
  cusContrNo?: string;
  cusAmt?: number;
  cusUsdAmt?: number;
  currency?: string;
  exDate?: string;
  exCurrRate?: number;
  usdRate?: number;
  taxRate?: number;
  amt?: number;
  drawbackAmt?: number;
  drawbackFee?: number;
  drawbackFeeRate?: number;
  subsidy?: number;
  subsidyRate?: number;
  billCode?: string;
  ownerCode?: string;
  ownerName?: string;
  serviceType?: ServiceType;
  taxServType?: number;
  erateType?: number;
  insDate?: string;
  status?: StatusType;
  declareStep?: LedgerStepType;
}

// 商品列表接口
export interface LedgerGoodsListParamsType {
  ledgerToken: number;
}
export interface LedgerGoodsListResType {
  id?: number;
  ledgerCode?: string;
  goodsName?: string;
  count?: number;
  unit?: string;
  rate?: number;
  cusAmt?: number;
  cnyAmt?: number;
  goodsAmt?: number;
  noTaxAmt?: number;
  drawbackAmt?: number;
  fee?: number;
  subsidy?: number;
}

// 收汇列表接口
export interface LedgerShListParamsType {
  ledgerToken: number;
  ledgerItemToken: number;
}
export interface LedgerShListResType {
  id?: number;
  shCode?: string;
  shDate?: string;
  shUsdRate?: number;
  exchRate?: number;
  shAmt?: number;
  shCnyAmt?: number;
  goodsAmt?: number;
  noTaxAmt?: number;
  drawbackAmt?: number;
  fee?: number;
  subsidy?: number;
}
