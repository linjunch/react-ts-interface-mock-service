import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AgentListParamsType,
  AgentDetailParamsType,
  AgentCreateParamsType,
  AgentChangeParamsType,
  AgentStateParamsType,
} from '@/interfaces/operate';

// 申报单位列表接口
export async function agentList(params: AgentListParamsType) {
  return request(`/api/operator/admin/agents?${stringify(params)}`);
}
// 申报单位详情接口
export async function agentDetail(params: AgentDetailParamsType) {
  const { agentToken } = params;
  return request(`/api/operator/admin/agent/${agentToken}/detail`);
}
// 申报单位创建接口
export async function agentCreate(params: AgentCreateParamsType) {
  const { agent } = params;
  return request(`/api/operator/admin/agent`, {
    method: 'POST',
    data: agent,
  });
}
// 申报单位修改接口
export async function agentChange(params: AgentChangeParamsType) {
  const { agentToken, agent } = params;
  return request(`/api/operator/admin/agent/${agentToken}`, {
    method: 'PUT',
    data: agent,
  });
}
// 申报单位状态接口
export async function agentState(params: AgentStateParamsType) {
  const { agentToken, val } = params;
  return request(`/api/operator/admin/agent/${agentToken}/state?${stringify(val)}`, {
    method: 'POST',
  });
}
