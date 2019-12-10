// 汇率列表接口
export interface CostRateListParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface CostRateListResType {
  id?: number;
  costDate?: string;
  usd?: number;
  eur?: number;
  hkd?: number;
  insUser?: string;
  insDate?: string;
}
// 汇率创建接口
export interface CostRateCreateParamsType {
  costRate: CostRateCreateFormType;
}
export interface CostRateCreateFormType {
  costDate?: string;
  usd?: number;
  eur?: number;
  hkd?: number;
}
export interface CostRateCreateResType {
  token?: number;
}
// 汇率修改接口
export interface CostRateChangeParamsType {
  costRateToken: number;
  costRate: CostRateChangeFormType;
}
export interface CostRateChangeFormType {
  costDate: string;
  usd: number;
  eur: number;
  hkd: number;
}
export interface CostRateChangeResType {
  token?: number;
}
