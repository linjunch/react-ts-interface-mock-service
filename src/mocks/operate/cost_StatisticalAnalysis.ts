import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 订单费用基础统计接口
const orderFeeBase = (req: Request, res: Response) => {
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
          increment: '@number',
          amt: '@number',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

// 订单费用增长分析接口
const orderFeeIncrease = (req: Request, res: Response) => {
  const {
    query: { dateL, dateU },
  } = req;
  if (dateL && dateU) {
    res.send(
      mockjs.mock({
        date: '@string',
        increment: '@number',
        amt: '@number',
      }),
    );
  }
};

// 订单费用属性分布接口
const orderFeeAttr = (req: Request, res: Response) => {
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
            value: '@number',
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
  'GET /api/operator/cost/data/orderFee/base': orderFeeBase,
  'GET /api/operator/cost/data/orderFee/increase': orderFeeIncrease,
  'GET /api/operator/cost/data/orderFee/attr': orderFeeAttr,
};
