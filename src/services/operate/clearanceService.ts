import request from '@/utils/request';
import { stringify } from 'qs';
import {
  DeclareListParamsType,
  DeclareDetailParamsType,
  DeclareGoodsListParamsType,
  DeclareStepParamsType,
  DeclaringParamsType,
  ClearanceParamsType,
} from '@/interfaces/operate';

// 关单列表接口
export async function declareList(params: DeclareListParamsType) {
  return request(`/api/operator/service/declares?${stringify(params)}`);
}
// 关单详情接口
export async function declareDetail(params: DeclareDetailParamsType) {
  const { declareToken } = params;
  return request(`/api/operator/service/declare/${declareToken}/detail`);
}
// 商品列表接口
export async function declareGoodsList(params: DeclareGoodsListParamsType) {
  const { declareToken } = params;
  return request(`/api/operator/service/declare/${declareToken}/goodses`);
}
// 关单进度接口
export async function declareStep(params: DeclareStepParamsType) {
  const { declareToken, declareStep } = params;
  return request(`/api/operator/service/declare/${declareToken}/step/${declareStep}`, {
    method: 'PUT',
  });
}
// 关单已申报接口
export async function Ddclaring(params: DeclaringParamsType) {
  const { declareToken, form } = params;
  return request(`/api/supplier/admin/declare/${declareToken}/step/declaring`, {
    method: 'PUT',
    data: form,
  });
}
// 关单已结关接口
export async function clearance(params: ClearanceParamsType) {
  const { declareToken, form } = params;
  return request(`/api/supplier/admin/declare/${declareToken}/step/clearance`, {
    method: 'PUT',
    data: form,
  });
}
