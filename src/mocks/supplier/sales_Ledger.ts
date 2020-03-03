import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 退税结算列表接口
const ledgerList = (req: Request, res: Response) => {
  const { page, size } = req.query;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@integer',
          ledgerCode: '@string',
          ownerName: '@string',
          orderCode: '@string',
          cusContrNo: '@string',
          exDate: '@date(yyyy-MM-dd)',
          insDate: '@datetime',
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

// 退税结算详情接口
const ledgerDetail = (req: Request, res: Response) => {
  const { ledgerToken } = req.params;
  ledgerToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          ledgerCode: '@string',
          orderCode: '@string',
          cusContrNo: '@string',
          cusAmt: '@float(0, 100, 5, 5)',
          cusUsdAmt: '@float(0, 100, 5, 5)',
          currency: '@string',
          exDate: '@datetime',
          exCurrRate: '@float(0, 100, 5, 5)',
          usdRate: '@float(0, 100, 5, 5)',
          taxRate: '@float(0, 100, 5, 5)',
          amt: '@float(0, 100, 5, 5)',
          drawbackAmt: '@float(0, 100, 5, 5)',
          drawbackFee: '@float(0, 100, 5, 5)',
          drawbackFeeRate: '@float(0, 100, 5, 5)',
          subsidy: '@float(0, 100, 5, 5)',
          subsidyRate: '@float(0, 100, 5, 5)',
          billCode: '@string',
          ownerCode: '@string',
          ownerName: '@string',
          serviceType: 'declareService',
          taxServType: '@integer',
          erateType: '@integer',
          insDate: '@datetime',
          status: 'enabled',
          step: 'draft',
        },
      }),
    );
};

// 商品列表接口
const ledgerGoodsList = (req: Request, res: Response) => {
  const { ledgerToken } = req.params;
  ledgerToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 5,
        elems: [
          {
            id: '@integer',
            ledgerCode: '@string',
            goodsName: '@string',
            count: '@float',
            unit: '@string',
            rate: '@float',
            cusAmt: '@float',
            cnyAmt: '@float',
            goodsAmt: '@float',
            noTaxAmt: '@float',
            drawbackAmt: '@float',
            fee: '@float',
            subsidy: '@float',
          },
        ],
      }),
    );
};

// 收汇列表接口
const ledgerShList = (req: Request, res: Response) => {
  const { ledgerToken, ledgerItemToken } = req.params;
  if (ledgerToken && ledgerItemToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 5,
        elems: [
          {
            id: '@integer',
            shCode: '@string',
            shDate: '@datetime',
            shUsdRate: '@float',
            exchRate: '@float',
            shAmt: '@float',
            shCnyAmt: '@float',
            goodsAmt: '@float',
            noTaxAmt: '@float',
            drawbackAmt: '@float',
            fee: '@float',
            subsidy: '@float',
          },
        ],
      }),
    );
  }
};

export default {
  'GET /api/supplier/sales/ledgers': ledgerList,
  'GET /api/supplier/sales/ledger/:ledgerToken/detail': ledgerDetail,
  'GET /api/supplier/sales/ledger/:ledgerToken/goodses': ledgerGoodsList,
  'GET /api/supplier/sales/ledger/:ledgerToken/goods/:ledgerItemToken/shs': ledgerShList,
};
