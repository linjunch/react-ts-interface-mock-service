import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 凭证列表接口
const voucherList = (req: Request, res: Response) => {
  const { size, page } = req.query;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@int',
          contractCode: '@string',
          tradeName: '@string',
          ownerName: '@string',
          taxRate: '@float',
          subsidyRate: '@float',
          effectiveDate: '@date(yyyy-MM-dd)',
          expiryDate: '@date(yyyy-MM-dd)',
          isLock: false,
          status: 'enabled',
          step: 'draft',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 凭证详情接口
const voucherDetail = (req: Request, res: Response) => {
  const { voucherToken } = req.params;
  if (voucherToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          id: '@int',
          remitDate: '@date(yyyy-MM-dd)',
          remitAmt: 'float(0, 10000000, 2, 2)',
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

// 凭证创建接口
const voucherCreate = (req: Request, res: Response) => {
  const {
    query: { submit },
    body: { remitDate, remitAmt, currency, tradeCode, tradeName, buyerName, fileUrl, piList },
  } = req;
  if (
    submit &&
    remitDate &&
    remitAmt &&
    currency &&
    tradeCode &&
    tradeName &&
    buyerName &&
    fileUrl &&
    piList
  ) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@int',
      }),
    );
  }
};

export default {
  'GET /api/supplier/sales/vouchers': voucherList,
  'GET /api/supplier/sales/voucher/:voucherToken/detail': voucherDetail,
  'POST /api/supplier/sales/voucher': voucherCreate,
};
