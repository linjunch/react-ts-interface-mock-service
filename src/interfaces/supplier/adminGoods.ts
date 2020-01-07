import { StatusType, CheckStepType, GoodsSortType, DownloadType } from '../global';

// 商品列表接口
export interface AdminGoodsListParamsType {
  goodsName?: string;
  goodsCode?: string;
  factoryName?: string;
  insDateL?: string;
  insDateU?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: GoodsSortType;
  page?: number;
  size?: number;
}
export interface AdminGoodsListResType {
  id?: number;
  goodsCode?: string;
  goodsName?: string;
  factoryName?: string;
  insDate?: string;
  model?: string;
  imgUrl?: string;
  status?: Exclude<StatusType, 'all'>;
  step?: Exclude<CheckStepType, 'all'>;
}
// 商品详情接口
export interface AdminGoodsDetailParamsType {
  goodsToken: number;
}
export interface AdminGoodsDetailResType {
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
  status?: Exclude<StatusType, 'all'>;
  step?: Exclude<CheckStepType, 'all'>;
}
// pubilc:商品表单接口
export interface AdminGoodsFormParamsType {
  goodsCode: string;
  goodsName: string;
  goodsNameEn?: string;
  factoryId: number;
  factoryName: string;
  model?: string;
  unit: string;
  unitEn?: string;
  brand?: string;
  brandEn?: string;
  imgUrl: string;
  goodsPrice?: number;
}
// 商品创建接口
export interface AdminGoodsCreateParamsType {
  submit: boolean;
  goods: AdminGoodsFormParamsType;
}
export interface AdminGoodsCreateResType {
  token?: number;
}
// 商品修改接口
export interface AdminGoodsChangeParamsType {
  goodsToken: number;
  submit: boolean;
  goods: AdminGoodsFormParamsType;
}
export interface AdminGoodsChangeResType {
  token?: number;
}
// 导入模板下载接口，仅有入口参数
export interface AdminGoodsDownloadParamsType {
  Type: Extract<DownloadType, 'template'>;
}
// 批量下载接口,没有入口参数和返回参数
