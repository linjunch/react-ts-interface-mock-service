import request from '@/utils/request';
import { stringify } from 'qs';
import {
  GoodsListParamsType,
  GoodsDetailParamsType,
  GoodsStepParamsType,
} from '@/interfaces/operate';

// 商品列表接口
export async function goodsList(params: GoodsListParamsType) {
  return request(`/api/operator/service/goodses?${stringify(params)}`);
}
// 商品详情接口
export async function goodsDetail(params: GoodsDetailParamsType) {
  const { goodsToken } = params;
  return request(`/api/operator/service/goods/${goodsToken}`);
}
// 商品审核接口
export async function goodsStep(params: GoodsStepParamsType) {
  const { goodsToken, checkStep } = params;
  return request(`/api/operator/service/goods/${goodsToken}/step/${checkStep}`, {
    method: 'PUT',
  });
}
