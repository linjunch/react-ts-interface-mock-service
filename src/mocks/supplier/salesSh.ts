import { Request, Response } from 'express';
import mockjs from 'mockjs';

const shList = (req: Request, res: Response) => {
  const { size, page } = req.query;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@int',
          shCode: '@string',
          amount: '@float(0, 100000000, 2, 2)',
          currency: '@string',
          remitter: '@string',
          shDate: '@date(yyyy-MM-dd)',
          jhDate: '@date(yyyy-MM-dd)',
          tradeName: '@string',
          insDate: '@datetime',
          shStep: 'draft',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

const shDetail = (req: Request, res: Response) => {
  const { shToken } = req.params;
  if (shToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          id: '@int',
          tradeName: '@string',
          shCode: '@string',
          amount: '@float(0, 10000000, 2, 2)',
          currency: '@string',
          exchRate: '@float(0, 100, 5, 5)',
          usdRate: '@float(0, 100, 5, 5)',
          remitter: '@string',
          shDate: '@date(yyyy-MM-dd)',
          bankName: '@string',
          bankAccount: '@string',
          abstract: '@string',
          jhCode: '@string',
          jhDate: '@date(yyyy-MM-dd)',
          jhBankAccount: '@string',
          shVoucherId: '@integer',
          insDate: '@datetime',
          shStep: 'draft',
        },
      }),
    );
  }
};

export default {
  'GET /api/supplier/sales/shs': shList,
  'GET /api/supplier/sales/sh/:shToken/detail': shDetail,
};
