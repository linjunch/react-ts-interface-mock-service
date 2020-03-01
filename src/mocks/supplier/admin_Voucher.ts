import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 凭证列表接口
const adminVoucherList = (req: Request, res: Response) => {
  const { page, size } = req.query;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@integer(int64)',
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

// 凭证详情接口
const adminVoucherDetail = (req: Request, res: Response) => {
  const { voucherToken } = req.params;
  if (voucherToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          id: '@integer(int64)',
          remitDate: '@date(yyyy-MM-dd)',
          remitAmt: '@float(0, 10000000, 2, 2)',
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
  }
};

export default {
  'GET /api//supplier/admin/vouchers': adminVoucherList,
  'GET /supplier/admin/voucher/:voucherToken/detail': adminVoucherDetail,
};
