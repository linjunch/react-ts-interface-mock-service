import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 申报单位列表接口
const agentList = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@integer',
          agentName: '@string',
          region: '@string',
          contact: '@string',
          telephone: '@string',
          cellphone: '@string',
          insDate: '@datetime',
          status: 'enabled',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 申报单位详情接口
const agentDetail = (req: Request, res: Response) => {
  const {
    params: { agentToken },
  } = req;
  agentToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          agentName: '@string',
          scc: '@string',
          cusCode: '@string',
          regionCode: '@string',
          region: '@string',
          address: '@string',
          contact: '@string',
          telephone: '@string',
          cellphone: '@string',
          insUser: '@string',
          insDate: '@datetime',
          status: 'enabled',
        },
      }),
    );
};

// 申报单位创建接口
const agentCreate = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@integer(int64)',
    }),
  );
};

// 申报单位修改接口
const agentChange = (req: Request, res: Response) => {
  const {
    params: { agentToken },
  } = req;
  agentToken &&
    res.send(
      mockjs.mock({
        code: 200,
        token: agentToken,
      }),
    );
};

// 申报单位状态接口
const agentState = (req: Request, res: Response) => {
  const {
    params: { agentToken },
    query: { val },
  } = req;
  if (agentToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: agentToken,
      }),
    );
  }
};

export default {
  'GET /api/operator/admin/agents': agentList,
  'GET /api/operator/admin/agent/:agentToken/detail': agentDetail,
  'POST /api/operator/admin/agent': agentCreate,
  'PUT /api/operator/admin/agent/:agentToken': agentChange,
  'POST /api/operator/admin/agent/:agentToken/state': agentState,
};
