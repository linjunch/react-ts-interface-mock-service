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
          supplierName: '@string',
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
          salesmanId: '@int',
          salesman: '@string',
          reward: '@float',
          isReward: true,
          auditUser: '@string',
          insUser: '@string',
          insDate: '@datetime',
          billStep: 'draft',
        },
      }),
    );
};

// 订单结算创建接口
const billCreate = (req: Request, res: Response) => {
  const {
    query: { submit },
    body: { bill },
  } = req;
  if (submit && bill) {
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
          salesmanId: '@int',
          salesman: '@string',
          reward: '@float',
          isReward: true,
          auditUser: '@string',
          insUser: '@string',
          insDate: '@datetime',
          billStep: 'draft',
        },
      }),
    );
  }
};

// 订单结算修改接口
const billChange = (req: Request, res: Response) => {
  const {
    params: { billToken },
    query: { submit },
    body: { bill },
  } = req;
  if (billToken && submit && bill) {
    res.send(
      mockjs.mock({
        code: 200,
        token: billToken,
      }),
    );
  }
};

// 订单结算进度接口
const billStep = (req: Request, res: Response) => {
  const {
    params: { billToken, billStep },
  } = req;
  if (billToken && billStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: billToken,
      }),
    );
  }
};

// 订单结算删除接口
const billDelete = (req: Request, res: Response) => {
  const {
    params: { billToken },
  } = req;
  billToken &&
    res.send(
      mockjs.mock({
        code: 200,
        message: 'success',
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

// 结算明细创建接口
const billItemDetail = (req: Request, res: Response) => {
  const {
    params: { billToken },
    body: { billItem },
  } = req;
  if (billToken && billItem) {
    res.send(
      mockjs.mock({
        code: 200,
        token: billToken,
      }),
    );
  }
};

// 结算明细修改接口
const billItemChange = (req: Request, res: Response) => {
  const {
    params: { billToken, itemToken },
    body: { billItem },
  } = req;
  if (billToken && itemToken && billItem) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer',
      }),
    );
  }
};

// 结算明细删除接口
const billItemDelete = (req: Request, res: Response) => {
  const {
    params: { billToken, itemToken },
  } = req;
  if (billToken && itemToken) {
    res.send(
      mockjs.mock({
        code: 200,
        message: 'success',
      }),
    );
  }
};

export default {
  'GET /api/operator/cost/bills': billList,
  'GET /api/operator/cost/bill/:billToken/detail': billDetail,
  'POST /api/operator/cost/bill': billCreate,
  'PUT /api/operator/cost/bill/:billToken': billChange,
  'PUT /api/operator/cost/bill/:billToken/step/:billStep': billStep,
  'Delete /api/operator/cost/bill/:billToken': billDelete,
  'GET /api/operator/cost/bill/:billToken/items': billItemList,
  'POST /api/operator/cost/bill/:billToken/item': billItemDetail,
  'PUT /api/operator/cost/bill/:billToken/item/:itemToken': billItemChange,
  'Delete /api/operator/cost/bill/:billToken/item/:itemToken': billItemDelete,
};
