import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 货款结账列表接口
const paymentList = (req: Request, res: Response) => {
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
          paymentCode: '@string',
          supplierName: '@string',
          shCode: '@string',
          ledgerCode: '@string',
          auditUser: '@string',
          insUser: '@string',
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
  const {
    params: { paymentToken },
  } = req;
  paymentToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          paymentCode: '@string',
          supplierCode: '@string',
          supplierName: '@string',
          shCode: '@string',
          ledgerCode: '@string',
          amt: '@float(0, 100, 5, 5)',
          deduct: '@float(0, 100, 5, 5)',
          payable: '@float(0, 100, 5, 5)',
          detail: '@string',
          paymentType: 'beforehand',
          auditUser: '@string',
          insUser: '@string',
          insDate: '@datetime',
          step: 'draft',
        },
      }),
    );
};

// 货款结账创建接口
const paymentCreate = (req: Request, res: Response) => {
  const {
    query: { submit },
    body: { payment },
  } = req;
  if (submit && payment) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer',
      }),
    );
  }
};

// 货款结账修改接口
const paymentChange = (req: Request, res: Response) => {
  const {
    params: { paymentToken },
    query: { submit },
    body: { payment },
  } = req;
  if (paymentToken && submit && payment) {
    res.send(
      mockjs.mock({
        code: 200,
        token: paymentToken,
      }),
    );
  }
};

// 货款结账进度接口
const paymentStep = (req: Request, res: Response) => {
  const {
    params: { paymentToken, paymentStep },
  } = req;
  if (paymentToken && paymentStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: paymentToken,
      }),
    );
  }
};

// 货款结账删除接口
const paymentDelete = (req: Request, res: Response) => {
  const {
    params: { paymentToken },
  } = req;
  if (paymentToken) {
    res.send(
      mockjs.mock({
        code: 200,
        message: 'success',
      }),
    );
  }
};

// 结账明细列表接口
const paymentItemList = (req: Request, res: Response) => {
  const {
    params: { paymentToken },
  } = req;
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

// 结账明细创建接口
const paymentItemCreate = (req: Request, res: Response) => {
  const {
    params: { paymentToken },
    body: { paymentItem },
  } = req;
  if (paymentToken && paymentItem) {
    res.send(
      mockjs.mock({
        code: 200,
        token: paymentToken,
      }),
    );
  }
};

// 结账明细修改接口
const paymentItemChange = (req: Request, res: Response) => {
  const {
    params: { paymentToken, paymentItemToken },
    body: { paymentItem },
  } = req;
  if (paymentToken && paymentItemToken && paymentItem) {
    res.send(
      mockjs.mock({
        code: 200,
        token: paymentToken,
      }),
    );
  }
};

// 结账明细删除接口
const paymentItemDelete = (req: Request, res: Response) => {
  const {
    params: { paymentToken, paymentItemToken },
  } = req;
  if (paymentToken && paymentItemToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: paymentToken,
      }),
    );
  }
};

export default {
  'GET /api/trade/cost/payments': paymentList,
  'GET /api/trade/cost/payment/:paymentToken/detail': paymentDetail,
  'POST /api/trade/cost/payment': paymentCreate,
  'PUT /api/trade/cost/payment/:paymentToken': paymentChange,
  'PUT /api/trade/cost/payment/:paymentToken/step/:paymentStep': paymentStep,
  'Delete /api/trade/cost/payment/:paymentToken': paymentDelete,
  'GET /api/trade/cost/payment/:paymentToken/items': paymentItemList,
  'POST /api/trade/cost/payment/:paymentToken/items': paymentItemCreate,
  'PUT /api/trade/cost/payment/:paymentToken/item/:paymentItemToken': paymentItemChange,
  'DELETE /api/trade/cost/payment/:paymentToken/item/:paymentItemToken': paymentItemDelete,
};
