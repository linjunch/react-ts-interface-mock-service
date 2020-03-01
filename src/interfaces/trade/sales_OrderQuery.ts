import {
  StatusType,
  StepType,
  SortType,
  SizeType,
  ServiceType,
  DeclareType,
  OrderType,
} from '../global';

// 订单列表接口
export interface CustomerOrderListParamsType {
  type: OrderType;
  piCode?: string;
  ownerName?: string;
  piDateL?: string;
  piDateU?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: StepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface CustomerOrderListResType {
  id?: number;
  orderCode?: string;
  piCode?: string;
  piDate?: string;
  buyer?: string;
  ownerName?: string;
  insUser?: string;
  insDate?: string;
  isLock?: boolean;
  status?: StatusType;
  step?: StepType;
}

// 订单详情接口
export interface CustomerOrderDetailParamsType {
  orderToken: number;
}
export interface CustomerOrderDetailResType {
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
  containerList?: Array<CustomerOrderDetailListType>;
  deliveryDate?: string;
  piFile?: string;
  isCusSplit?: boolean;
  isFumigate?: boolean;
  isTruck?: boolean;
  isShipping?: boolean;
  insUser?: string;
  createDate?: string;
  isLock?: boolean;
  status?: StatusType;
  step?: StepType;
}
export interface CustomerOrderDetailListType {
  no?: number;
  size?: SizeType;
  count?: number;
  weight?: number;
}

// 商品列表接口
export interface CustomerGoodsListParamsType {
  orderToken: number;
}
export interface CustomerGoodsListResType {
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
export interface CustomerContainerListParamsType {
  orderToken: number;
}
export interface CustomerContainerListResType {
  id?: number;
  contNo?: number;
  contCode?: string;
  contType?: SizeType;
  weight?: number;
  seal?: string;
  goodsCount?: number;
  packNo?: number;
  trayCount?: number;
  grossWet?: number;
  netWet?: number;
  volume?: number;
  goodsList?: Array<GoodsListType>;
  img1Url?: string;
  img2Url?: string;
  img3Url?: string;
  img4Url?: string;
  img5Url?: string;
  videoList?: Array<string>;
}
interface GoodsListType {
  no?: number;
  name?: string;
  model?: string;
  dealQty?: number;
  dealUnit?: string;
  pkgsQty?: number;
  pkgsUnit?: string;
  trayQty?: number;
  grossWet?: number;
  NetWet?: number;
  volume?: number;
}
