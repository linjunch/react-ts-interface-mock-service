import request from '@/utils/request';
import { stringify } from 'qs';
import {
  DeclaresListParamsType,
  DeclaresDetailParamsType,
  DeclaresStepParamsType,
  DeclaresGoodsListParamsType,
} from '@/interfaces/supplier';

// 关单列表接口
export async function declaresList(params: DeclaresListParamsType) {
  return request(`/api/supplier/admin/declares?${stringify(params)}`);
}

// 关单详情接口
export async function declaresDetail(params: DeclaresDetailParamsType) {
  const { declareToken } = params;
  return request(`/api/supplier/admin/declare/${declareToken}/detail`);
}

// 关单进度接口
export async function declaresStep(params: DeclaresStepParamsType) {
  const { declareToken, declareStep } = params;
  return request(`/api/supplier/admin/declare/${declareToken}/step/${declareStep}`, {
    method: 'PUT',
  });
}

// 商品列表接口
export async function declaresGoodsList(params: DeclaresGoodsListParamsType) {
  const { declareToken } = params;
  return request(`/api/supplier/admin/declare/${declareToken}/goodses`);
}
