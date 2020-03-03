import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 收汇列表接口
const adminShList = (req: Request, res: Response) => {
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

// 收汇详情接口
const adminShDetail = (req: Request, res: Response) => {
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
  'GET /api/supplier/admin/shs': adminShList,
  'GET /api/supplier/admin/sh/:shToken/detail': adminShDetail,
};
