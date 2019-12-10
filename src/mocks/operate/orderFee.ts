import { Request, Response } from 'express';
import mockjs from 'mockjs';

const orderFeeList = (req: Request, res: Response) => {
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
          feeCode: '@string',
          supplierName: '@string',
          ownerName: '@string',
          orderCode: '@string',
          otherOrderCode: '@string',
          feeType: '@string',
          subtotal: '@float',
          insDate: '@datetime',
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

const orderFeeDetail = (req: Request, res: Response) => {
  const {
    params: { orderFeeToken },
  } = req;
  orderFeeToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          feeCode: '@string',
          supplierName: '@string',
          orderCode: '@string',
          costPayType: '@integer',
          content: '@string',
          count: '@float',
          amt: '@float',
          discount: '@float',
          detail: '@float',
          auditUser: '@string',
          subtotal: '@string',
          insUser: '@string',
          insDate: '@datetime',
          checkStep: 'draft',
          billCode: '@string',
        },
      }),
    );
};

const orderFeeCreate = (req: Request, res: Response) => {
  const {
    params: { orderFeeToken },
    body: {
      orderCode,
      otherOrderCode,
      feeType,
      serviceType,
      costPayType,
      content,
      count,
      amt,
      discount,
      subtotal,
    },
  } = req;
  if (
    orderFeeToken &&
    orderCode &&
    otherOrderCode &&
    feeType &&
    serviceType &&
    costPayType &&
    content &&
    count &&
    amt &&
    discount &&
    subtotal
  ) {
    res.send(
      mockjs.mock({
        code: 200,
        token: orderFeeToken,
      }),
    );
  }
};

const orderFeeChange = (req: Request, res: Response) => {
  const {
    params: { orderFeeToken },
    query: { submit },
    body: {
      orderCode,
      otherOrderCode,
      feeType,
      serviceType,
      costPayType,
      content,
      count,
      amt,
      discount,
      subtotal,
    },
  } = req;
  if (
    orderFeeToken &&
    submit &&
    orderCode &&
    otherOrderCode &&
    feeType &&
    serviceType &&
    costPayType &&
    content &&
    count &&
    amt &&
    discount &&
    subtotal
  ) {
    res.send(
      mockjs.mock({
        code: 200,
        token: orderFeeToken,
      }),
    );
  }
};

const orderFeeStep = (req: Request, res: Response) => {
  const {
    params: { orderFeeToken, checkStep },
  } = req;
  if (orderFeeToken && checkStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: orderFeeToken,
      }),
    );
  }
};

export default {
  'GET /api/operator/cost/orderFees': orderFeeList,
  'GET /api/operator/cost/orderFee/:orderFeeToken/detail': orderFeeDetail,
  'POST /api/operator/cost/orderFee': orderFeeCreate,
  'PUT /api/operator/cost/orderFee/:orderFeeToken': orderFeeChange,
  'PUT /api/operator/cost/orderFee/:orderFeeToken/step/:checkStep': orderFeeStep,
};
