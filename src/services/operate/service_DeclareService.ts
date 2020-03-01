import request from '@/utils/request';
import { stringify } from 'qs';
import {
  DeclareListParamsType,
  DeclareDetailParamsType,
  DeclareGoodsListParamsType,
  DeclareStepParamsType,
  DeclaringParamsType,
  ClearanceParamsType,
  DeclareChangeParamsType,
  DeclareGoodsCreateParamsType,
  DeclareGoodsChangeParamsType,
  DeclareGoodsDeleteParamsType,
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
// 关单修改接口
export async function declareChange(params: DeclareChangeParamsType) {
  const { declareToken, ...query } = params;
  return request(`/api/operator/service/declare/${declareToken}?${stringify(query)}`);
}
// 商品列表接口
export async function declareGoodsList(params: DeclareGoodsListParamsType) {
  const { declareToken } = params;
  return request(`/api/operator/service/declare/${declareToken}/goodses`);
}
// 商品创建接口
export async function DeclareGoodsCreate(params: DeclareGoodsCreateParamsType) {
  const { declareToken, goods } = params;
  return request(`/api/operator/service/declare/${declareToken}/goods`, {
    method: 'POST',
    data: goods,
  });
}
// 商品修改接口
export async function DeclareGoodsChange(params: DeclareGoodsChangeParamsType) {
  const { declareToken, goodsToken, goods } = params;
  return request(`/api/operator/service/declare/${declareToken}/goods/${goodsToken}`, {
    method: 'PUT',
    data: goods,
  });
}
// 商品删除接口
export async function DeclareGoodsDelete(params: DeclareGoodsDeleteParamsType) {
  const { declareToken, goodsToken } = params;
  return request(`/api/operator/service/declare/${declareToken}/goods/${goodsToken}`, {
    method: 'Delete',
  });
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
