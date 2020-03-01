import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 商品列表接口
const adminGoodsList = (req: Request, res: Response) => {
  const { page, size } = req.query;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@integer',
          goodsCode: '@string',
          goodsName: '@string',
          factoryName: '@string',
          insDate: '@datetime',
          model: '@string',
          imgUrl: '@url',
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

// 商品详情接口
const adminGoodsDetail = (req: Request, res: Response) => {
  const { goodsToken } = req.params;
  if (goodsToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          id: '@integer(int64)',
          supplierCode: 'string',
          goodsCode: '@string',
          goodsName: '@string',
          goodsNameEn: '@string',
          model: '@string',
          unit: '@string',
          unitEn: '@string',
          brand: '@string',
          brandEn: '@string',
          imgUrl: '@url',
          goodsPrice: '@string',
          insUser: '@string',
          insDate: '@datetime',
          status: 'enabled',
          checkStep: 'draft',
        },
      }),
    );
  }
};

// 商品创建接口
const adminGoodsCreate = (req: Request, res: Response) => {
  const { submit } = req.query;
  const { goodsCode, goodsName, unit, imgUrl } = req.body;
  if (submit && goodsCode && goodsName && unit && imgUrl) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer(int64)',
      }),
    );
  }
};

// 商品修改接口
const adminGoodsChange = (req: Request, res: Response) => {
  const { goodsToken } = req.params;
  const { submit } = req.query;
  const { goodsCode, goodsName, unit, imgUrl } = req.body;
  if (goodsToken && submit && goodsCode && goodsName && unit && imgUrl) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer(int64)',
      }),
    );
  }
};

export default {
  'GET /api/supplier/admin/goodses': adminGoodsList,
  'GET /api/supplier/admin/goods/:goodsToken/detail': adminGoodsDetail,
  'POST /supplier/admin/goods': adminGoodsCreate,
  'PUT /supplier/admin/goods/:goodsToken': adminGoodsChange,
};
