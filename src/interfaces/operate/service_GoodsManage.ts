import { StatusType, CheckStepType, CompanySortType } from '../global';

// 商品列表接口
export interface GoodsListParamsType {
  supplierName?: string;
  factoryName?: string;
  goodsName?: string;
  goodsCode?: string;
  insDateL?: string;
  insDateU?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: CompanySortType;
  page?: number;
  size?: number;
}
export interface GoodsListResType {
  id?: number;
  goodsCode?: string;
  goodsName?: string;
  factoryName?: string;
  insDate?: string;
  model?: string;
  imgUrl?: string;
  status?: StatusType;
  step?: CheckStepType;
}

// 商品详情接口
export interface GoodsDetailParamsType {
  goodsToken: number;
}
export interface GoodsDetailResType {
  id?: number;
  supplierCode?: string;
  goodsCode?: string;
  goodsName?: string;
  goodsNameEn?: string;
  model?: string;
  unit?: string;
  unitEn?: string;
  brand?: string;
  brandEn?: string;
  imgUrl?: string;
  goodsPrice?: number;
  insUser?: string;
  insDate?: string;
  status?: StatusType;
  checkStep?: CheckStepType;
}

// 商品审核接口
export interface GoodsStepParamsType {
  goodsToken: number;
  checkStep: Extract<CheckStepType, 'pass' | 'return' | 'reject'>;
}
export interface GoodsStepResType {
  token: number;
}
