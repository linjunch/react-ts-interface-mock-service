import { Request, Response } from 'express';
import mockjs from 'mockjs';

const declaresList = (req: Request, res: Response) => {
  const { size, page } = req.query;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@int',
          orderCode: '@string',
          piCode: '@string',
          piDate: '@date(yyyy-MM-dd)',
          buyer: '@string',
          tradeName: '@string',
          factoryName: '@string',
          ownerName: '@string',
          ExDate: '@datetime',
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

const declaresDetail = (req: Request, res: Response) => {
  const { declareToken } = req.params;
  if (declareToken) {
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
  }
};

const declaresStep = (req: Request, res: Response) => {
  const { declareToken, declareStep } = req.params;
  if (declareToken && declareStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: declareToken,
      }),
    );
  }
};

const declaresGoodsList = (req: Request, res: Response) => {
  const { declareToken } = req.params;
  if (declareToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 5,
        elems: [
          {
            gNo: '@integer',
            hscode: '@string',
            name: '@string',
            model: '@string',
            imgUrl: '@url',
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
  }
};

export default {
  'GET /api/supplier/admin/declares': declaresList,
  'GET /supplier/admin/declare/:declareToken/detail': declaresDetail,
  'PUT /supplier/admin/declare/:declareToken/step/:declareStep': declaresStep,
  'GET /supplier/admin/declare/:declareToken/goodses': declaresGoodsList,
};
