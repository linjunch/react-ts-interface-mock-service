import {
  CompanyType,
  StatusType,
  SortType,
  StepType,
  ServiceType,
  AgentType,
  SizeType,
  PackingType,
} from '../global';

import { PickRequired, PickPartial } from '../utils';
// public：订单信息接口
export interface ContainerListType {
  no: number;
  size: SizeType;
  count: number;
  weight: number;
}

export interface OrderFormType {
  piCode: string;
  piDate: string;
  buyer: string;
  buyerAddr: string;
  tradeCode: string;
  tradeName: string;
  ownerCode: string;
  ownerName: string;
  contractCode: string;
  remark?: string;
  trafMode: string;
  iePort: string;
  cusPort: string;
  transMode: string;
  currency: string;
  tradeCountry: string;
  tradeArea: string;
  lcMode: string;
  lcModeOther?: string;
  wrapType: string;
  volume?: number;
  netWet: number;
  containerList?: Array<ContainerListType>;
  deliveryDate: string;
  piFile?: string;
  isCusSplit?: boolean;
}

// 订单列表接口
interface OrderListParamsType {
  piCode?: string;
  tradeName?: string;
  ownerName?: string;
  factoryName?: string;
  piDateL?: string;
  piDateU?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: StepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}

export interface OrderListResType {
  orderCode?: string;
  piCode?: string;
  piDate?: string;
  buyer?: string;
  tradeName?: string;
  factoryName?: string;
  ownerName?: string;
  insDate?: string;
  isLock?: boolean;
  status?: Exclude<StatusType, 'all'>;
  step?: StepType;
}

// 订单详情接口
export interface OrderDetailParamsType {
  orderToken: string;
}

export interface OrderDetailResType {
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
  agentType?: AgentType;
  agentMark?: string;
  contractCode?: string;
  remark?: string;
  trafMode?: string;
  trafModeOther?: string;
  iePort?: string;
  cusPort?: string;
  transMode?: string;
  transModeOther?: string;
  currency?: string;
  tradeCountry?: string;
  tradeArea?: string;
  lcMode?: string;
  lcModeOther?: string;
  wrapType?: string;
  volume?: number;
  netWet?: number;
  mark?: string;
  containerList?: array<Partial<ContainerListType>>;
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

// 订单创建接口
export interface OrderCreateParamsType {
  submit: boolean;
  order: Record<'containerList', Array<PickPartial<ContainerListType, 'weight'>>> &
    Omit<OrderFormType, 'containerList'>;
}

export interface OrderCreateResType {
  token?: string;
}

// 订单修改接口
export interface OrderChangeParamsType {
  orderToken: string;
  submit: boolean;
  order: Record<'containerList', Array<PickPartial<ContainerListType, 'weight'>>> &
  Omit<OrderFormType, 'containerList'>;
}

export interface OrderChangeResType {
  token?: string;
}

// 唛头修改接口
export interface ShippingMarksParamsType {
  orderToken: string;
  container: ShippingMarksContainerType;
}

export interface ShippingMarksContainerType {
  mark: string;
}

export interface ShippingMarksResType {
  token?: string;
}

// 资源下载接口
export interface DownlaodParamsType {
  orderToken: string;
  Type: PackingType;
}

// 商品列表接口
export interface GoodsListParamsType {
  orderToken: string;
}

export interface GoodsListResType {
  id?: string;
  goodsId: number;
  goodsCode?: string;
  goodsName?: string;
  model?: string;
  imgUrl?: string;
  dealQty: number;
  dealUnit: string;
  dealPrice: number;
  dealAmount: number;
}

// 商品创建接口
export interface GoodsCreateParamsType {
  orderToken: string;
  goods: GoodsCreateElemType;
}

export interface GoodsCreateElemType {
  goodsId: number;
  dealQty: number;
  dealPrice: number;
  dealAmount: number;
}

export interface GoodsCreateResType {
  token?: string;
}

// 商品修改接口
export interface GoodsChangeParamsType {
  orderToken: string;
  goodsToken: string;
  goods: GoodsChangeElemType;
}

export interface GoodsChangeElemType {
  dealQty: number;
  dealPrice: number;
  dealAmount: number;
}

export interface GoodsChangeResType {
  token?: string;
}

// 商品删除接口
export interface GoodsDeleteParamsType {
  orderToken: string;
  goodsToken: string;
}

// 装柜列表接口
export interface ContainerListParamsType {
  orderToken: string;
}

export interface ContainerListResType {
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
  goodsList?: ContainerListGoodsListType;
  img1Url?: string;
  img2Url?: string;
  img3Url?: string;
  img4Url?: string;
  img5Url?: string;
  videoList?: string[];
}

export interface ContainerListGoodsListType {
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

// public : 装柜信息和货物信息
export interface ContainersType {
  cNo: number;
  cCode: string;
  cType: SizeType;
  weight?: number;
  goodsList: GoodsListType;
  img1Url?: string;
  img2Url?: string;
  img3Url?: string;
  img4Url?: string;
  img5Url?: string;
  videoList?: string[];
}

export interface GoodsListType {
  no: number;
  name: string;
  model: string;
  dealQty: number;
  dealUnit: string;
  pkgsQty: number;
  pkgsUnit: string;
  trayQty?: number;
  grossWet: number;
  NetWet: number;
  volume?: number;
}

// 装柜创建接口
export interface ContainerCreateParamsType {
  orderToken: string;
  submit: boolean;
  container: ContainersType;
}

export interface ContainerCreateResType {
  token?: string;
}

// 装柜修改接口
export interface ContainerChangeParamsType {
  orderToken: string;
  containerToken: string;
  container: ContainersType;
}

export interface ContainerChangeResType {
  token?: string;
}

// 装柜删除接口
export interface ContainerDeleteParamsType {
  orderToken: string;
  containerToken: string;
}
