import { Request, Response } from 'express';
import mockjs from 'mockjs';

const goodsList = (req: Request, res: Response) => {
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
          goodsCode: '@string',
          goodsName: '@string',
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

const goodsDetail = (req: Request, res: Response) => {
  const {
    params: { goodsToken },
  } = req;
  goodsToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          id: '@integer',
          supplierCode: 'string',
          goodsCode: '@string',
          goodsName: '@string',
          goodsNameEn: '@string',
          model: '@string',
          unit: '@string',
          unitEn: '@string',
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
};

const goodsStep = (req: Request, res: Response) => {
  const {
    params: { goodsToken, checkStep },
  } = req;
  if (goodsToken && checkStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: goodsToken,
      }),
    );
  }
};

export default {
  'GET /api/operator/service/goodses': goodsList,
  'GET /api/operator/service/goods/:goodsToken': goodsDetail,
  'PUT /api/operator/service/goods/:goodsToken/step/:checkStep': goodsStep,
};
