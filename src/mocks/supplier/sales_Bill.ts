import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 订单结算列表接口
const billList = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@int',
          billCode: '@string',
          orderCode: '@string',
          serviceCode: '@string',
          billType: '@string',
          total: '@float',
          insDate: '@datetime',
          billStep: 'draft',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 订单结算详情接口
const billDetail = (req: Request, res: Response) => {
  const {
    params: { billToken },
  } = req;
  billToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          billCode: '@string',
          supplierId: '@int',
          supplierName: '@string',
          orderId: '@int',
          orderCode: '@string',
          billType: '@string',
          serviceCode: '@string',
          serviceFee: '@decimal',
          discount: '@float',
          additional: '@decimal',
          total: '@decimal',
          detail: '@string',
          insDate: '@datetime',
          billStep: 'draft',
        },
      }),
    );
};

// 结算明细列表接口
const billItemList = (req: Request, res: Response) => {
  const {
    params: { billToken },
  } = req;
  billToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            id: '@int',
            content: '@string',
            count: 3,
            amt: '@float',
            discount: '@float',
            subtotal: '@float',
            detail: '@string',
          },
        ],
        page: 1,
        pageTotal: 5,
        size: 10,
      }),
    );
};

export default {
  'GET /api/supplier/sales/bills': billList,
  'GET /api/supplier/sales/bill/:billToken/detail': billDetail,
  'GET /api/supplier/sales/bill/:billToken/items': billItemList,
};
