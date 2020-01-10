import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminGoodsListParamsType,
  AdminGoodsDetailParamsType,
  AdminGoodsCreateParamsType,
  AdminGoodsChangeParamsType,
  AdminGoodsDownloadParamsType,
} from '@/interfaces/supplier';

// 商品列表接口
export async function adminGoodsList(params: AdminGoodsListParamsType) {
  return request(`/api/supplier/admin/goodses?${stringify(params)}`);
}

// 商品详情接口
export async function adminGoodsDetail(params: AdminGoodsDetailParamsType) {
  const { goodsToken } = params;
  return request(`/api/supplier/admin/goods/${goodsToken}/detail`);
}

// 商品创建接口
export async function adminGoodsCreate(params: AdminGoodsCreateParamsType) {
  const { submit, goods } = params;
  return request(`/api/supplier/admin/goods?${stringify(submit)}`, {
    method: 'POST',
    data: goods,
  });
}

// 商品修改接口
export async function adminGoodsChange(params: AdminGoodsChangeParamsType) {
  const { goodsToken, submit, goods } = params;
  return request(`/api/supplier/admin/goods/${goodsToken}?${stringify(submit)}`, {
    method: 'PUT',
    data: goods,
  });
}

// 导入模板下载接口
export async function adminGoodsDownload(params: AdminGoodsDownloadParamsType) {
  const { Type } = params;
  return request(`/api/supplier/admin/goods/download?${stringify(Type)}`);
}
