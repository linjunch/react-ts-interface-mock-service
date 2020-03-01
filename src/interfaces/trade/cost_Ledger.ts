import { StatusType, LedgerStepType, LedgerSortType, ServiceType } from '../global';

// 退税结算列表接口
export interface LedgerListParamsType {
  exDateL?: string;
  exDateU?: string;
  insDateL?: string;
  insDateU?: string;
  supplierName?: string;
  ownerName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: LedgerStepType;
  direction?: boolean;
  sort?: LedgerSortType;
  page?: number;
  size?: number;
}
export interface LedgerListResType {
  id?: number;
  ledgerCode?: string;
  supplierName?: string;
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
  supplierCode?: string;
  supplierName?: string;
  ownerCode?: string;
  ownerName?: string;
  serviceType?: ServiceType;
  taxServType?: number;
  erateType?: number;
  salesman?: string;
  insDate?: string;
  status?: StatusType;
  declareStep?: LedgerStepType;
}

// 退税结算修改接口
export interface LedgerChangeParamsType {
  ledgerToken: number;
  submit: boolean;
  ledger: LedgerChangeFormType;
}
export interface LedgerChangeFormType {
  cusAmt: number;
  cusUsdAmt: number;
  currency: string;
  exDate: string;
  exCurrRate: number;
  usdRate: number;
  taxRate: number;
  amt: number;
  drawbackAmt: number;
  drawbackFee: number;
  drawbackFeeRate: number;
  subsidy: number;
  subsidyRate: number;
  billCode: string;
  taxServType: number;
  erateType: number;
}
export interface LedgerChangeResType {
  token?: number;
}

// 退税结算状态接口
export interface LedgerStateParamsType {
  ledgerToken: number;
  val: StatusType;
}
export interface LedgerStateResType {
  token: number;
}

// 退税结算进度接口
export interface LedgerStepParamsType {
  ledgerToken: number;
  ledgerStep: Exclude<LedgerStepType, 'draft' | 'check' | 'pass' | 'return' | 'refuse' | 'accept'>;
}
export interface LedgerStepResType {
  token: number;
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

// 商品创建接口
export interface LedgerGoodsCreateParamsType {
  ledgerToken: number;
  ledgerItem: LedgerGoodsCreateFormType;
}
export interface LedgerGoodsCreateFormType {
  goodsName: number;
  count: number;
  unit: string;
  rate: number;
  cusAmt: number;
  cnyAmt: number;
  goodsAmt: number;
  noTaxAmt: number;
  drawbackAmt: number;
  fee: number;
  subsidy: number;
}
export interface LedgerGoodsCreateResType {
  token?: number;
}

// 商品修改接口
export interface LedgerGoodsChangeParamsType {
  ledgerToken: number;
  ledgerItemToken: number;
  ledgerItem: LedgerGoodsChangeFormType;
}
export interface LedgerGoodsChangeFormType {
  goodsName: number;
  count: number;
  unit: string;
  rate: number;
  cusAmt: number;
  cnyAmt: number;
  goodsAmt: number;
  noTaxAmt: number;
  drawbackAmt: number;
  fee: number;
  subsidy: number;
}
export interface LedgerGoodsChangeResType {
  token?: number;
}

// 商品删除接口
export interface LedgerGoodsDeleteParamsType {
  ledgerToken: number;
  ledgerItemToken: number;
}

// 收汇列表接口
export interface LedgerShListParamsType {
  ledgerToken: number;
  ledgerItemToken: number;
}
export interface LedgerShListResType {
  id: number;
  shCode: string;
  shDate: string;
  shUsdRate: number;
  exchRate: number;
  shAmt: number;
  shCnyAmt: number;
  goodsAmt: number;
  noTaxAmt: number;
  drawbackAmt: number;
  fee: number;
  subsidy: number;
}

// 收汇创建接口
export interface LedgerShCreateParamsType {
  ledgerToken: number;
  ledgerItemToken: number;
  ledgerSh: LedgerShCreateFormType;
}
export interface LedgerShCreateFormType {
  shCode: string;
  shAmt: number;
  shCnyAmt: number;
}
export interface LedgerShCreateResType {
  token: number;
}

// 收汇修改接口
export interface LedgerShChangeParamsType {
  ledgerToken: number;
  ledgerItemToken: number;
  ledgerShToken: number;
  ledgerSh: LedgerShChangeFormType;
}
export interface LedgerShChangeFormType {
  shCode: string;
  shAmt: number;
  shCnyAmt: number;
}
export interface LedgerShChangeResType {
  token: number;
}

// 收汇删除接口
export interface LedgerShDeleteParamsType {
  ledgerToken: number;
  ledgerItemToken: number;
  ledgerShToken: number;
}
