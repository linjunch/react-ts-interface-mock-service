import { Request, Response } from 'express';
import mockjs from 'mockjs';

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

const agentCreate = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@integer(int64)',
    }),
  );
};

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
