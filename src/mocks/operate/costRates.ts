import { Request, Response } from 'express';
import mockjs from 'mockjs';

const costRateList = (req: Request, res: Response) => {
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
          costDate: '@date(yyyy-MM)',
          usd: '@float',
          eur: '@float',
          hkd: '@float',
          insUser: '@string',
          insDate: '@datetime',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

const costRateDetail = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@integer',
    }),
  );
};

const costRateChange = (req: Request, res: Response) => {
  const {
    params: { costRateToken },
    body: { costDate, usd, eur, hkd },
  } = req;
  if (costRateToken && costDate && usd && eur && hkd) {
    res.send(
      mockjs.mock({
        code: 200,
        token: costRateToken,
      }),
    );
  }
};

export default {
  'GET /api/operator/cost/costRates': costRateList,
  'POST /api/operator/cost/costRate': costRateDetail,
  'PUT /api/operator/cost/costRate/:costRateToken': costRateChange,
};
