import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 收汇基础统计接口
const shBase = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          date: '@string',
          increment: '@number',
          amt: '@number',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 收汇增长分析接口
const shIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU) {
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@number',
        amt: '@number',
      }),
    );
  }
};

// 收汇属性分布接口
const shAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type && page && size) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            name: '@string',
            value: '@number',
            ratio: '@float',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

// 退税基础统计接口
const ledgerBase = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          date: '@string',
          increment: '@integer',
          total: '@integer',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 退税增长分析接口
const ledgerIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU) {
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
  }
};

// 退税属性分布接口
const ledgerAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            name: '@string',
            value: '@integer',
            ratio: '@float',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

export default {
  'GET /api/trade/cost/data/sh/base': shBase,
  'GET /api/trade/cost/data/sh/increase': shIncrease,
  'GET /api/trade/cost/data/sh/attr': shAttr,
  'GET /api/trade/cost/data/ledger/base': ledgerBase,
  'GET /api/trade/cost/data/ledger/increase': ledgerIncrease,
  'GET /api/trade/cost/data/ledger/attr': ledgerAttr,
};
