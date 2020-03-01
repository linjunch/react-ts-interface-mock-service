import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 订单基础统计接口
const orderBase = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          date: '@string',
          increment: '@integer',
          total: '@integer',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 订单增长分析接口
const orderIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU) {
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
  }
};

// 订单属性分布接口
const orderAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            name: '@string',
            value: '@integer',
            ratio: '@float',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

// 出口额基础统计接口
const exAmtBase = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          date: '@string',
          increment: '@integer',
          amt: '@integer',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 出口额增长分析接口
const exAmtIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU) {
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        amt: '@integer',
      }),
    );
  }
};

// 出口额属性分布接口
const exAmtAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            name: '@string',
            value: '@integer',
            ratio: '@float',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

// 出口量基础统计接口
const exSumBase = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          date: '@string',
          increment: '@integer',
          total: '@integer',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 出口量增长分析接口
const exSumIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU) {
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
  }
};

// 出口量属性分布接口
const exSumAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            name: '@string',
            value: '@integer',
            ratio: '@float',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

// 供应商基础统计接口
const supplierBase = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          date: '@string',
          increment: '@integer',
          total: '@integer',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 供应商增长分析接口
const supplierIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU) {
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
  }
};

// 供应商属性分布接口
const supplierAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            name: '@string',
            value: '@integer',
            ratio: '@float',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

export default {
  'GET /api/trade/admin/data/order/base': orderBase,
  'GET /api/trade/admin/data/order/increase': orderIncrease,
  'GET /api/trade/admin/data/order/attr': orderAttr,

  'GET /api/trade/admin/data/exAmt/base': exAmtBase,
  'GET /api/trade/admin/data/exAmt/increase': exAmtIncrease,
  'GET /api/trade/admin/data/exAmt/attr': exAmtAttr,

  'GET /api/trade/admin/data/exSum/base': exSumBase,
  'GET /api/trade/admin/data/exSum/increase': exSumIncrease,
  'GET /api/trade/admin/data/exSum/attr': exSumAttr,

  'GET /api/trade/admin/data/supplier/base': supplierBase,
  'GET /api/trade/admin/data/supplier/increase': supplierIncrease,
  'GET /api/trade/admin/data/supplier/attr': supplierAttr,
};
