import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 供应商基础统计接口
const adminSupplierBase = (req: Request, res: Response) => {
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
const adminSupplierIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 供应商属性分布接口
const adminSupplierAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 外综服基础统计接口
const adminTradeBase = (req: Request, res: Response) => {
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

// 外综服增长分析接口
const adminTradeIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 外综服属性分布接口
const adminTradeAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 销售单位基础统计接口
const adminOwnerBase = (req: Request, res: Response) => {
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

// 销售单位增长分析接口
const adminOwnerIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 销售单位属性分布接口
const adminOwnerAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 生产单位基础统计接口
const adminFactoryBase = (req: Request, res: Response) => {
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

// 生产单位增长分析接口
const adminFactoryIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 生产单位属性分布接口
const adminFactoryAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 客服业务基础统计接口
const adminSaleBase = (req: Request, res: Response) => {
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

// 客服业务增长分析接口
const adminsaleIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 订单基础统计接口
const adminOrderBase = (req: Request, res: Response) => {
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
const adminOrderIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 订单属性分布接口
const adminOrderAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 关单基础统计接口
const adminDeclareBase = (req: Request, res: Response) => {
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

// 关单增长分析接口
const adminDeclareIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 关单属性分布接口
const adminDeclareAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 出口量基础统计接口
const adminExSumBase = (req: Request, res: Response) => {
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
const adminExSumIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 出口量属性分布接口
const adminExSumAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 出口额基础统计接口
const adminExAmtBase = (req: Request, res: Response) => {
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
const adminExAmtIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        amt: '@integer',
      }),
    );
};

// 出口额属性分布接口
const adminExAmtAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 收汇量基础统计接口
const adminShBase = (req: Request, res: Response) => {
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

// 收汇量增长分析接口
const adminShIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 收汇量属性分布接口
const adminShAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 收汇额基础统计接口
const adminShAmtBase = (req: Request, res: Response) => {
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

// 收汇额增长分析接口
const adminShAmtIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        amt: '@integer',
      }),
    );
};

// 收汇额属性分布接口
const adminShAmtAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

// 退税基础统计接口
const adminLedgerBase = (req: Request, res: Response) => {
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

// 退税增长分析接口
const adminLedgerIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU)
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@integer',
        total: '@integer',
      }),
    );
};

// 退税属性分布接口
const adminLedgerAttr = (req: Request, res: Response) => {
  const {
    query: { type, page, size },
  } = req;
  if (type)
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
};

export default {
  'GET /api/operator/admin/data/supplier/base': adminSupplierBase,
  'GET /api/operator/admin/data/supplier/increase': adminSupplierIncrease,
  'GET /api/operator/admin/data/supplier/attr': adminSupplierAttr,

  'GET /api/operator/admin/data/trade/base': adminTradeBase,
  'GET /api/operator/admin/data/trade/increase': adminTradeIncrease,
  'GET /api/operator/admin/data/trade/attr': adminTradeAttr,

  'GET /api/operator/admin/data/owner/base': adminOwnerBase,
  'GET /api/operator/admin/data/owner/increase': adminOwnerIncrease,
  'GET /api/operator/admin/data/owner/attr': adminOwnerAttr,

  'GET /api/operator/admin/data/factory/base': adminFactoryBase,
  'GET /api/operator/admin/data/factory/increase': adminFactoryIncrease,
  'GET /api/operator/admin/data/factory/attr': adminFactoryAttr,

  'GET /api/operator/admin/data/sale/base': adminSaleBase,
  'GET /api/operator/admin/data/sale/increase': adminsaleIncrease,

  'GET /api/operator/admin/data/order/base': adminOrderBase,
  'GET /api/operator/admin/data/order/increase': adminOrderIncrease,
  'GET /api/operator/admin/data/order/attr': adminOrderAttr,

  'GET /api/operator/admin/data/declare/base': adminDeclareBase,
  'GET /api/operator/admin/data/declare/increase': adminDeclareIncrease,
  'GET /api/operator/admin/data/declare/attr': adminDeclareAttr,

  'GET /api/operator/admin/data/exSum/base': adminExSumBase,
  'GET /api/operator/admin/data/exSum/increase': adminExSumIncrease,
  'GET /api/operator/admin/data/exSum/attr': adminExSumAttr,

  'GET /api/operator/admin/data/exAmt/base': adminExAmtBase,
  'GET /api/operator/admin/data/exAmt/increase': adminExAmtIncrease,
  'GET /api/operator/admin/data/exAmt/attr': adminExAmtAttr,

  'GET /api/operator/admin/data/sh/base': adminShBase,
  'GET /api/operator/admin/data/sh/increase': adminShIncrease,
  'GET /api/operator/admin/data/sh/attr': adminShAttr,

  'GET /api/operator/admin/data/shAmt/base': adminShAmtBase,
  'GET /api/operator/admin/data/shAmt/increase': adminShAmtIncrease,
  'GET /api/operator/admin/data/shAmt/attr': adminShAmtAttr,

  'GET /api/operator/admin/data/ledger/base': adminLedgerBase,
  'GET /api/operator/admin/data/ledger/increase': adminLedgerIncrease,
  'GET /api/operator/admin/data/ledger/attr': adminLedgerAttr,
};
