import request from '@/utils/request';
import { stringify } from 'qs';
import {
  ContractUploadParamsType,
  ContractDownloadParamsType,
  AdmittanceChangeParamsType,
  ExamineChangeParamsType,
} from '@/interfaces/operate';

// 协议模板上传接口
export async function contractUpload(params: ContractUploadParamsType) {
  const { Type } = params;
  return request(`/api/operator/admin/contract/upload?${stringify(Type)}`, {
    method: 'POST',
  });
}
// 协议模板下载接口
export async function contractDownload(params: ContractDownloadParamsType) {
  const { Type } = params;
  return request(`/api/operator/admin/contract/download?${stringify(Type)}`);
}
// 准入模板修改接口
export async function admittanceChange(params: AdmittanceChangeParamsType) {
  const { admittance } = params;
  return request(`/api/operator/admin/contract/admittance/alter`, {
    method: 'PUT',
    data: admittance,
  });
}
// 查验模板修改接口
export async function examineChange(params: ExamineChangeParamsType) {
  const { examine } = params;
  return request(`/api/operator/admin/contract/examine/alter`, {
    method: 'PUT',
    data: examine,
  });
}
