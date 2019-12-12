import { DownloadType } from '../global';

// 协议模板上传接口
export interface ContractUploadParamsType {
  Type: Exclude<DownloadType, 'packing' | 'template'>;
}
// 协议模板下载接口
export interface ContractDownloadParamsType {
  Type: Exclude<DownloadType, 'packing' | 'template'>;
}
// 准入模板修改接口
export interface AdmittanceChangeParamsType {
  admittance: AdmittanceChangeFormType;
}
export interface AdmittanceChangeFormType {
  admittance: object;
}
export interface AdmittanceChangeResType {
  url?: string;
}
// 查验模板修改接口
export interface ExamineChangeParamsType {
  examine: ExamineChangeFormType;
}
export interface ExamineChangeFormType {
  examine: object;
}
export interface ExamineChangeResType {
  url?: string;
}
