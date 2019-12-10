import { IsLockType, DeclareStepType, SortType, StatusType, StepType } from '../global';

// 关单列表接口
export interface DeclareListParamsType {
  piCode?: string;
  tradeName?: string;
  ownerName?: string;
  factoryName?: string;
  isLock?: IsLockType;
  step?: DeclareStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface DeclareListResType {
  id?: number;
  declareCode?: string;
  piCode?: string;
  piDate?: string;
  buyer?: string;
  tradeName?: string;
  factoryName?: string;
  ownerName?: string;
  ExDate?: string;
  isLock?: boolean;
  status?: Exclude<StatusType, 'all'>;
  step?: Exclude<StepType, 'all'>;
}
// 关单详情接口
export interface DeclareDetailParamsType {
  declareToken: number;
}
export interface DeclareDetailResType {
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

  containerList?: Array<DeclareContainerListType>;
  licenseList?: Array<DeclareLicenseListType>;

  insDate?: String;
  isLock?: boolean;
  status?: Exclude<StatusType, 'all'>;
  declareStep?: Exclude<DeclareStepType, 'all'>;
}
export interface DeclareContainerListType {
  no?: number;
  num?: string;
  size?: string;
  lclflag?: boolean;
  goodsno?: string;
  weight?: number;
}
export interface DeclareLicenseListType {
  no?: number;
  decatttype?: string;
  title?: string;
  url?: string;
}
// 商品列表接口
export interface DeclareGoodsListParamsType {
  declareToken: number;
}
export interface DeclareGoodsListResType {
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
  hsdutyModecode?: string;
  districtCode?: string;
}
// 关单进度接口
export interface DeclareStepParamsType {
  declareToken: number;
  declareStep: Extract<StepType, 'send' | 'pass'>;
}
export interface DeclareStepResType {
  token: number;
}
// 关单已申报接口
export interface DeclaringParamsType {
  declareToken: number;
  form: DeclaringFormType;
}
export interface DeclaringFormType {
  entryId: string;
  seqNo: string;
  declareDate: string;
}
export interface DeclaringResType {
  token: number;
}
// 关单已结关接口
export interface ClearanceParamsType {
  declareToken: number;
  form: ClearanceFormType;
}
export interface ClearanceFormType {
  exDate: string;
}
export interface ClearanceResType {
  token: number;
}
