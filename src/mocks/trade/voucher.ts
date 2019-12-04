import { Request, Response } from 'express';
import mockjs from 'mockjs';

const voucherList = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@string',
          remitDate: '@date(yyyy-MM-dd)',
          currency: '@string',
          remitAmt: '@float(0, 100000000, 2, 2)',
          tradeName: '@string',
          buyerName: '@string',
          insDate: '@datetime',
          isLock: false,
          status: 'enabled',
          checkStep: 'draft',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

const voucherDetail = (req: Request, res: Response) => {
  const {
    params: { voucherToken },
  } = req;
  voucherToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          id: '@integer',
          remitDate: '@date(yyyy-MM-dd)',
          remitAmt: '@@float(0, 10000000, 2, 2)',
          currency: '@string',
          tradeName: '@string',
          buyerName: '@string',
          fileUrl: '@url',
          piList: ['@string'],
          remark: '@string',
          insUser: '@string',
          insDate: '@datetime',
          isLock: false,
          status: 'enabled',
          checkStep: 'draft',
        },
      }),
    );
};

const voucherStep = (req: Request, res: Response) => {
  const {
    params: { voucherToken },
    query: { val },
  } = req;
  if (voucherToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: voucherToken,
      }),
    );
  }
};

export default {
  'GET /api/trade/cost/vouchers': voucherList,
  'GET /api/trade/cost/voucher/:voucherToken/detail': voucherDetail,
  'PUT /api/trade/cost/voucher/:voucherToken/step': voucherStep,
};
