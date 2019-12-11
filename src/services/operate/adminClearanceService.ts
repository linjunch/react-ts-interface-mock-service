import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminDeclareListParamsType,
  AdminDeclareDetailParamsType,
  AdminDeclareGoodsListParamsType,
  AdminDeclareStepParamsType,
} from '@/interfaces/operate';

// 关单列表接口
export async function adminDeclareList(params: AdminDeclareListParamsType) {
  return request(`/api/operator/admin/declares?${stringify(params)}`);
}
// 关单详情接口
export async function adminDeclareDetail(params: AdminDeclareDetailParamsType) {
  const { declareToken } = params;
  return request(`/api/operator/admin/declare/${declareToken}/detail`);
}
// 商品列表接口
export async function adminDeclareGoodsList(params: AdminDeclareGoodsListParamsType) {
  const { declareToken } = params;
  return request(`/api/operator/admin/declare/${declareToken}/goodses`);
}
// 关单进度接口
export async function adminDeclareStep(params: AdminDeclareStepParamsType) {
  const { declareToken, declareStep } = params;
  return request(`/api/operator/admin/declare/${declareToken}/step/${declareStep}`, {
    method: 'PUT',
  });
}
