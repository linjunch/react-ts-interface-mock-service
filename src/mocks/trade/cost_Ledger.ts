import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 退税结算列表接口
const ledgerList = (req: Request, res: Response) => {
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
          ledgerCode: '@string',
          supplierName: '@string',
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
  const {
    params: { ledgerToken },
  } = req;
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
          supplierCode: '@string',
          supplierName: '@string',
          ownerCode: '@string',
          ownerName: '@string',
          serviceType: 'declareService',
          taxServType: '@integer',
          erateType: '@integer',
          salesman: '@string',
          insDate: '@datetime',
          status: 'enabled',
          step: 'draft',
        },
      }),
    );
};

// 退税结算修改接口
const ledgerChange = (req: Request, res: Response) => {
  const {
    params: { ledgerToken },
    query: { submit },
    body: { ledger },
  } = req;
  if (ledgerToken && submit && ledger) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ledgerToken,
      }),
    );
  }
};

// 退税结算状态接口
const ledgerState = (req: Request, res: Response) => {
  const {
    params: { ledgerToken },
    query: { val },
  } = req;
  if (ledgerToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ledgerToken,
      }),
    );
  }
};

// 退税结算进度接口
const ledgerStep = (req: Request, res: Response) => {
  const {
    params: { ledgerToken, ledgerStep },
  } = req;
  if (ledgerToken && ledgerStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ledgerToken,
      }),
    );
  }
};

// 商品列表接口
const ledgerGoodsList = (req: Request, res: Response) => {
  const {
    params: { ledgerToken },
  } = req;
  if (ledgerToken) {
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
  }
};

// 商品创建接口
const ledgerGoodsCreate = (req: Request, res: Response) => {
  const {
    params: { ledgerToken },
    body: { ledgerItem },
  } = req;
  if (ledgerToken && ledgerItem) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ledgerToken,
      }),
    );
  }
};

// 商品修改接口
const ledgerGoodsChange = (req: Request, res: Response) => {
  const {
    params: { ledgerToken, ledgerItemToken },
    body: { ledgerItem },
  } = req;
  if (ledgerToken && ledgerItemToken && ledgerItem) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ledgerToken,
      }),
    );
  }
};

// 商品删除接口
const ledgerGoodsDelete = (req: Request, res: Response) => {
  const {
    params: { ledgerToken, ledgerItemToken },
  } = req;
  if (ledgerToken && ledgerItemToken) {
    res.send(
      mockjs.mock({
        code: 200,
        message: 'success',
      }),
    );
  }
};

// 收汇列表接口
const ledgerShList = (req: Request, res: Response) => {
  const {
    params: { ledgerToken, ledgerItemToken },
  } = req;
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

// 收汇创建接口
const ledgerShCreate = (req: Request, res: Response) => {
  const {
    params: { ledgerToken, ledgerItemToken },
    body: { ledgerSh },
  } = req;
  if (ledgerToken && ledgerItemToken && ledgerSh) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ledgerToken,
      }),
    );
  }
};

// 收汇修改接口
const ledgerShChange = (req: Request, res: Response) => {
  const {
    params: { ledgerToken, ledgerItemToken, ledgerShToken },
    body: { ledgerSh },
  } = req;
  if (ledgerToken && ledgerItemToken && ledgerShToken && ledgerSh) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ledgerToken,
      }),
    );
  }
};

// 收汇删除接口
const ledgerShDelete = (req: Request, res: Response) => {
  const {
    params: { ledgerToken, ledgerItemToken, ledgerShToken },
  } = req;
  if (ledgerToken && ledgerItemToken && ledgerShToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ledgerToken,
      }),
    );
  }
};

export default {
  'GET /api/trade/cost/ledgers': ledgerList,
  'GET /api/trade/cost/ledger/:ledgerToken/detail': ledgerDetail,
  'PUT /api/trade/cost/ledger/:ledgerToken': ledgerChange,
  'PUT /api/trade/cost/ledger/:ledgerToken/state': ledgerState,
  'PUT /api/trade/cost/ledger/:ledgerToken/step/:ledgerStep': ledgerStep,
  'GET /api/trade/cost/ledger/:ledgerToken/goodses': ledgerGoodsList,
  'POST /api/trade/cost/ledger/:ledgerToken/goods': ledgerGoodsCreate,
  'PUT /api/trade/cost/ledger/:ledgerToken/goods/:ledgerItemToken': ledgerGoodsChange,
  'Delete /api/trade/cost/legder/:ledgerToken/goods/:ledgerItemToken': ledgerGoodsDelete,
  'GET /api/trade/cost/ledger/:ledgerToken/goods/:ledgerItemToken/shs': ledgerShList,
  'POST /api/trade/cost/ledger/:ledgerToken/goods/:ledgerItemToken/sh': ledgerShCreate,
  'PUT /api/trade/cost/ledger/:ledgerToken/goods/:ledgerItemToken/sh/:ledgerShToken': ledgerShChange,
  'Delete /api/trade/cost/ledger/:ledgerToken/goods/:ledgerItemToken/sh/:ledgerShToken': ledgerShDelete,
};
