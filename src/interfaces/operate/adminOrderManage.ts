import {
  StatusType,
  StepType,
  SortType,
  SizeType,
  ServiceType,
  DeclareType,
  CheckStepType,
  LockStatusType,
} from '../global';

// 订单列表接口
export interface AdminOrderListParamsType {
  piCode?: string;
  supplierName?: string;
  tradeName?: string;
  ownerName?: string;
  factoryName?: string;
  insUser?: string;
  piDateL?: string;
  piDateU?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: StepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface AdminOrderListResType {
  id?: number;
  orderCode?: string;
  piCode?: string;
  piDate?: string;
  buyer?: string;
  tradeName?: string;
  ownerName?: string;
  insUser?: string;
  insDate?: string;
  isLock?: boolean;
  status?: Exclude<StatusType, 'all'>;
  step?: Exclude<StepType, 'all'>;
}
// 订单详情接口
export interface AdminOrderDetailParamsType {
  orderToken: number;
}
export interface AdminOrderDetailResType {
  orderCode?: string;
  supplierCode?: string;
  contact?: string;
  telephone?: string;
  piCode?: string;
  piDate?: string;
  buyer?: string;
  buyerAddr?: string;
  tradeCode?: string;
  tradeName?: string;
  ownerCode?: string;
  ownerName?: string;
  ownerAddr?: string;
  serviceType?: ServiceType;
  declareType?: DeclareType;
  declareMark?: string;
  contractCode?: string;
  remark?: string;
  trafMode?: string;
  iePort?: string;
  cusPort?: string;
  transMode?: string;
  currency?: string;
  tradeCountry?: string;
  tradeArea?: string;
  lcMode?: string;
  lcModeOther?: string;
  wrapType?: string;
  volume?: number;
  netWet?: number;
  mark?: string;
  containerList?: Array<AdminOrderDetailListType>;
  deliveryDate?: string;
  piFile?: string;
  isCusSplit?: boolean;
  isFumigate?: boolean;
  isTruck?: boolean;
  isShipping?: boolean;
  insUser?: string;
  createDate?: string;
  isLock?: boolean;
  status?: Exclude<CheckStepType, 'all'>;
  step?: Exclude<StepType, 'all'>;
}
export interface AdminOrderDetailListType {
  no?: number;
  size?: SizeType;
  count?: number;
  weight?: number;
}
// 商品列表接口
export interface AdminGoodsListParamsType {
  orderToken: number;
}
export interface AdminGOodsListResType {
  id?: number;
  goodsId: number;
  goodsCode?: string;
  goodsName?: string;
  factoryName?: string;
  model?: string;
  imgUrl?: string;
  dealQty: number;
  dealUnit: string;
  dealPrice: number;
  dealAmount: number;
}
// 装柜列表接口
export interface AdminContainerListParamsType {
  orderToken: number;
}
export interface AdminContainerListResType {
  id?: number;
  cNo?: number;
  cCode?: string;
  cType?: SizeType;
  weight?: number;
  seal?: string;
  gCount?: number;
  packNo?: number;
  trayCount?: number;
  grossWet?: number;
  netWet?: number;
  volume?: number;
  goodsList?: Array<AdminContainerListType>;
  img1Url?: string;
  img2Url?: string;
  img3Url?: string;
  img4Url?: string;
  img5Url?: string;
  videoList?: Array<string>;
}
export interface AdminContainerListType {
  no?: number;
  name?: string;
  model?: string;
  dealQty?: number;
  dealUnit?: string;
  pkgsQty?: number;
  pkgsUnit?: string;
  trayQty?: number;
  grossWet?: number;
  netWet?: number;
  volume?: number;
}
// 订单锁接口
export interface AdminOrderLockParamsType {
  orderToken: number;
  lockStatus: LockStatusType;
}
export interface AdminOrderLockResType {
  token: number;
}
