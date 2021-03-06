import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 货款结账列表接口
const paymentList = (req: Request, res: Response) => {
  const { page, size } = req.query;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@integer',
          paymentCode: '@string',
          tradeName: '@string',
          shCode: '@string',
          ledgerCode: '@string',
          insDate: '@datetime',
          paymentType: 'beforehand',
          step: 'draft',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 货款结账详情接口
const paymentDetail = (req: Request, res: Response) => {
  const { paymentToken } = req.params;
  paymentToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          paymentCode: '@string',
          tradeName: '@string',
          shCode: '@string',
          ledgerCode: '@string',
          amt: '@float(0, 100, 5, 5)',
          deduct: '@float(0, 100, 5, 5)',
          payable: '@float(0, 100, 5, 5)',
          detail: '@string',
          paymentType: 'beforehand',
          insDate: '@datetime',
          step: 'draft',
        },
      }),
    );
};

// 结账明细列表接口
const paymentItemList = (req: Request, res: Response) => {
  const { paymentToken } = req.params;
  paymentToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 5,
        elems: [
          {
            id: '@integer',
            paymentCode: '@string',
            bePaymentCode: '@string',
            amt: '@float',
          },
        ],
      }),
    );
};

export default {
  'GET /api/supplier/sales/payments': paymentList,
  'GET /api/supplier/sales/payment/:paymentToken/detail': paymentDetail,
  'GET /api/supplier/sales/payment/:paymentToken/items': paymentItemList,
};
