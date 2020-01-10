import { DeclareStepType, SortType, StatusType, StepType } from '../global';

// 关单列表接口
export interface DeclaresListParamsType {
  piCode?: string;
  tradeName?: string;
  ownerName?: string;
  declareDate?: string;
  entryId?: string;
  isLock?: boolean;
  step?: DeclareStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface DeclaresListResType {
  id?: number;
  orderCode?: string;
  piCode?: string;
  piDate?: string;
  buyer?: string;
  tradeName?: string;
  ownerName?: string;
  exDate?: string;
  declareDate?: string;
  entryId?: string;
  isLock?: boolean;
  status?: StatusType;
  step?: DeclareStepType;
}

// 关单详情接口
export interface DeclaresDetailParamsType {
  declareToken: number;
}
export interface DeclaresDetailResType {
  declareCode?: string;
  supplierCode?: string;
  ownerCode?: string;
  tradeCode?: string;
  orderCode?: string;
  contact?: string;
  telephone?: string;
  customMaster?: string;
  cusCiqNo?: string;
  seqNo?: string;
  preEntryId?: string;
  entryId?: string;
  entyPortCode?: string;
  iePort?: string;
  manualNo?: string;
  contrNo?: string;
  exDate?: string;
  declareDate?: string;
  tradeNo?: string;
  tradeScc?: string;
  tradeName?: string;
  ownerNo?: string;
  ownerScc?: string;
  ownerName?: string;
  agentNo?: string;
  agentScc?: string;
  agentName?: string;
  consigneeName?: string;
  trafMode?: string;
  trafName?: string;
  voyageNo?: string;
  billNo?: string;
  supvMode?: string;
  licenseNo?: string;
  cusPort?: string;
  transMode?: string;
  feeCurr?: string;
  feeMark?: number;
  feeRate?: number;
  insurCurr?: string;
  insurMark?: number;
  insurRate?: number;
  otherCurr?: string;
  otherMark?: number;
  otherRate?: number;
  packNo?: number;
  wrapType?: string;
  grossWet?: number;
  netWet?: number;
  tradeCountry?: string;
  tradeArea?: string;
  contaCount?: number;
  attaDocu?: string;
  mark?: string;
  notes?: string;
  containerList?: Array<ContainerListtype>;
  licenseList?: Array<LicenseListType>;
  insDate?: string;
  isLock?: boolean;
  status?: StatusType;
  declareStep?: DeclareStepType;
}
export interface ContainerListtype {
  no?: number;
  num?: string;
  size?: string;
  lclflag?: boolean;
  goodsno?: string;
  weight?: number;
}
export interface LicenseListType {
  no?: number;
  decatttype?: string;
  title?: string;
  url?: string;
}

// 关单进度接口
export interface DeclaresStepParamsType {
  declareToken: number;
  declareStep: Extract<DeclareStepType, 'declare' | 'withdraw'>;
}
export interface DeclaresStepResType {
  token: number;
}

// 商品列表接口
export interface DeclaresGoodsListParamsType {
  declareToken: number;
}
export interface DeclaresGoodsListResType {
  gNo?: number;
  hscode?: string;
  factoryName?: string;
  name?: string;
  model?: string;
  dealQty?: number;
  dealUnit?: string;
  dealPrice?: number;
  dealAmount?: number;
  currency?: string;
  unitQty?: number;
  unit?: string;
  unit2Qty?: number;
  unit2?: string;
  exgNo?: string;
  destinationCountry?: string;
  originCountry?: string;
  dutyMode?: string;
  districtCode?: string;
}
