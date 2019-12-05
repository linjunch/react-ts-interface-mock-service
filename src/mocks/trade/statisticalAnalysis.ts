import { Request, Response } from 'express';
import mockjs from 'mockjs';

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
