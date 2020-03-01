import { StatusType, CustomerSortType } from '../global';

// 申报单位列表接口
export interface AgentListParamsType {
  agentName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface AgentListResType {
  id?: number;
  agentName?: string;
  region?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insDate?: string;
  status?: StatusType;
}

// 申报单位详情接口
export interface AgentDetailParamsType {
  agentToken: number;
}
export interface AgentDetailResType {
  agentName?: string;
  scc?: string;
  cusCode?: string;
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insUser?: string;
  insDate?: string;
  status?: StatusType;
}

// 申报单位创建接口
export interface AgentCreateParamsType {
  agent: AgentCreateFormType;
}
export interface AgentCreateFormType {
  agentName?: string;
  scc?: string;
  cusCode?: string;
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
}
export interface AgentCreateResType {
  token?: number;
}

// 申报单位修改接口
export interface AgentChangeParamsType {
  agentToken: number;
  agent: AgentChangeFormType;
}
export interface AgentChangeFormType {
  agentName?: string;
  scc?: string;
  cusCode?: string;
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
}
export interface AgentChangeResType {
  token?: number;
}

// 申报单位状态接口
export interface AgentStateParamsType {
  agentToken: number;
  val: StatusType;
}
export interface AgentStateResType {
  token: number;
}
