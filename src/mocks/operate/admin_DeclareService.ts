import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 关单列表接口
const adminDeclareList = (req: Request, res: Response) => {
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
          orderCode: '@string',
          piCode: '@string',
          piDate: '@date(yyyy-MM-dd)',
          buyer: '@string',
          tradeName: '@string',
          ownerName: '@string',
          exDate: '@datetime',
          declareDate: '@datetime',
          entryId: '@string',
          isLock: false,
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

// 关单详情接口
const adminDeclareDetail = (req: Request, res: Response) => {
  const {
    params: { declareToken },
  } = req;
  declareToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          declareCode: '@string',
          supplierCode: '@string',
          ownerCode: '@string',
          tradeCode: '@string',
          orderCode: '@string',
          contact: '@string',
          telephone: '@string',
          customMaster: '@string',
          cusCiqNo: '@string',
          seqNo: '@string',
          preEntryId: '@string',
          entryId: '@string',
          entyPortCode: '@string',
          iePort: '@string',
          manualNo: '@string',
          contrNo: '@string',
          exDate: '@date(yyyy-MM-dd)',
          declareDate: '@date(yyyy-MM-dd)',
          tradeNo: '@string',
          tradeScc: '@string',
          tradeName: '@string',
          ownerNo: '@string',
          ownerScc: '@string',
          ownerName: '@string',
          agentNo: '@string',
          agentScc: '@string',
          agentName: '@string',
          consigneeName: '@string',
          trafMode: '@string',
          trafName: '@string',
          voyageNo: '@string',
          billNo: '@string',
          supvMode: '@string',
          licenseNo: '@string',
          cusPort: '@string',
          transMode: '@string',
          feeCurr: '@string',
          feeMark: '@string',
          feeRate: '@string',
          insurCurr: '@string',
          insurMark: '@string',
          insurRate: '@string',
          otherCurr: '@string',
          otherMark: '@string',
          otherRate: '@string',
          packNo: '@integer(1, 100)',
          wrapType: '@string',
          grossWet: '@float',
          netWet: '@float',
          tradeCountry: '@string',
          tradeAreaCode: '@string',
          contaCount: '@integer(1, 100)',
          attaDocu: '@integer(1, 100)',
          mark: '@string',
          notes: '@string',
          containerList: [
            {
              no: '@integer(1, 100)',
              num: 'string',
              size: 'string',
              lclflag: false,
              goodsno: 'string',
              weight: '@float(0, 10000, 2, 2)',
            },
          ],
          licenseList: [
            {
              no: '@integer(1, 100)',
              decatttype: 'string',
              title: 'string',
              url: '@url',
            },
          ],
          insDate: '@datetime',
          isLock: false,
          status: 'enabled',
          step: 'draft',
        },
      }),
    );
};

// 商品列表接口
const adminGoodsList = (req: Request, res: Response) => {
  const {
    params: { declareToken },
  } = req;
  declareToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 5,
        elems: [
          {
            goodsNo: '@integer',
            hscode: '@string',
            factoryName: '@string',
            name: '@string',
            model: '@string',
            dealQty: '@float',
            dealUnit: '@string',
            dealPrice: '@float',
            dealAmount: '@float',
            currency: '@string',
            unitQty: '@float',
            unit: '@string',
            unit2Qty: '@float',
            unit2: '@string',
            exgNo: '@string',
            destinationCountry: '@string',
            originCountry: '@string',
            dutyMode: '@string',
            districtCode: '@string',
          },
        ],
      }),
    );
};

// 关单进度接口
const adminDeclareStep = (req: Request, res: Response) => {
  const {
    params: { declareToken, declareStep },
  } = req;
  if (declareToken && declareStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: declareToken,
      }),
    );
  }
};

export default {
  'GET /api/operator/admin/declares': adminDeclareList,
  'GET /api/operator/admin/declare/:declareToken/detail': adminDeclareDetail,
  'GET /api/operator/admin/declare/:declareToken/goodses': adminGoodsList,
  'PUT /api/operator/admin/declare/:declareToken/step/:declareStep': adminDeclareStep,
};
