import { AnalysisType, OrderAttrType } from '../global';

// 供应商基础统计接口
export interface AdminSupplierBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminSupplierBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 供应商增长分析接口
export interface AdminSupplierIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminSupplierIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 供应商属性分布接口
export interface AdminSupplierAttrParamsType {
  type: AnalysisType;
  page?: number;
  size?: number;
}
export interface AdminSupplierAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 外综服基础统计接口
export interface AdminTradeBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminTradeBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 外综服增长分析接口
export interface AdminTradeIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminTradeIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 外综服属性分布接口
export interface AdminTradeAttrParamsType {
  type: Extract<AnalysisType, 'province' | 'city'>;
  page?: number;
  size?: number;
}
export interface AdminTradeAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 销售单位基础统计接口
export interface AdminOwnerBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminOwnerBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 销售单位增长分析接口
export interface AdminOwnerIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminOwnerIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 销售单位属性分布接口
export interface AdminOwnerAttrParamsType {
  type: Exclude<AnalysisType, 'salesman'>;
  page?: number;
  size?: number;
}
export interface AdminOwnerAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 生产单位基础统计接口
export interface AdminFactoryBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminFactoryBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 生产单位增长分析接口
export interface AdminFactoryIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminFactoryIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 生产单位属性分布接口
export interface AdminFactoryAttrParamsType {
  type: Exclude<AnalysisType, 'salesman'>;
  page?: number;
  size?: number;
}
export interface AdminFactoryAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 客服业务基础统计接口
export interface AdminSaleBaseParamsType {
  name?: string;
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminSaleBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 客服业务增长分析接口
export interface AdminSaleIncreaseParamsType {
  name?: string;
  dateL: string;
  dateU: string;
}
export interface AdminSaleIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 订单基础统计接口
export interface AdminOrderBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminOrderBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 订单增长分析接口
export interface AdminOrderIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminOrderIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 订单属性分布接口
export interface AdminOrderAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface AdminOrderAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 关单基础统计接口
export interface AdminDeclareBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminDeclareBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 关单增长分析接口
export interface AdminDeclareIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminDeclareIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 关单属性分布接口
export interface AdminDeclareAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface AdminDeclareAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 出口量基础统计接口
export interface AdminExSumBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminExSumBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 出口量增长分析接口
export interface AdminExSumIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminExSumIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 出口量属性分布接口
export interface AdminExSumAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface AdminExSumAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 出口额基础统计接口
export interface AdminExAmtBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminExAmtBaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}

// 出口额增长分析接口
export interface AdminExAmtIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminExAmtIncreaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}

// 出口额属性分布接口
export interface AdminExAmtAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface AdminExAmtAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 收汇量基础统计接口
export interface AdminShBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminShBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 收汇量增长分析接口
export interface AdminShIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminShIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 收汇量属性分布接口
export interface AdminShAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface AdminShAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 收汇额基础统计接口
export interface AdminShAmtBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminShAmtBaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}

// 收汇额增长分析接口
export interface AdminShAmtIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminShAmtIncreaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}

// 收汇额属性分布接口
export interface AdminShAmtAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface AdminShAmtAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 退税基础统计接口
export interface AdminLedgerBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface AdminLedgerBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 退税增长分析接口
export interface AdminLedgerIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface AdminLedgerIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 退税属性分布接口
export interface AdminLedgerAttrParamsType {
  type: OrderAttrType;
  page?: number;
  size?: number;
}
export interface AdminLedgerAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}
