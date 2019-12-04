import { Request, Response } from 'express';
import mockjs from 'mockjs';

const ShList = (req: Request, res: Response) => {
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
          shCode: '@string',
          amount: '@float(0, 100000000, 2, 2)',
          currency: '@string',
          remitter: '@string',
          shDate: '@date(yyyy-MM-dd)',
          jhDate: '@date(yyyy-MM-dd)',
          tradeName: '@string',
          insDate: '@datetime',
          shStep: 'draft',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

const ShDetail = (req: Request, res: Response) => {
  const {
    params: { shToken },
  } = req;
  shToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          id: '@integer',
          tradeName: '@string',
          shCode: '@string',
          amount: '@float(0, 10000000, 2, 2)',
          currency: '@string',
          exchRate: '@float(0, 100, 5, 5)',
          usdRate: '@float(0, 100, 5, 5)',
          remitter: '@string',
          shDate: '@date(yyyy-MM-dd)',
          bankName: '@string',
          bankAccount: '@string',
          abstract: '@string',
          jhCode: '@string',
          jhDate: '@date(yyyy-MM-dd)',
          jhBankAccount: '@string',
          shVoucherId: '@integer',
          insDate: '@datetime',
          shStep: 'draft',
        },
      }),
    );
};

const ShCreate = (req: Request, res: Response) => {
  const {
    query: { submit },
    body: { sh },
  } = req;
  if (submit && sh) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer',
      }),
    );
  }
};

const ShStepReturn = (req: Request, res: Response) => {
  const {
    params: { shToken },
  } = req;
  if (shToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: shToken,
      }),
    );
  }
};

const ShJh = (req: Request, res: Response) => {
  const {
    params: { shToken },
    query: { submit },
    body: { jh },
  } = req;
  if (shToken && submit && jh) {
    res.send(
      mockjs.mock({
        code: 200,
        token: shToken,
      }),
    );
  }
};

const ShStepPass = (req: Request, res: Response) => {
  const {
    params: { shToken },
  } = req;
  if (shToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: shToken,
      }),
    );
  }
};

const ShAffirm = (req: Request, res: Response) => {
  const {
    params: { shToken },
    body: {
      affirm: { shVoucherId },
    },
  } = req;
  if (shToken && shVoucherId) {
    res.send(
      mockjs.mock({
        code: 200,
        token: shToken,
      }),
    );
  }
};

const ShVerify = (req: Request, res: Response) => {
  const {
    params: { shToken },
  } = req;
  if (shToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: shToken,
      }),
    );
  }
};

const ShReaffirm = (req: Request, res: Response) => {
  const {
    params: { shToken },
  } = req;
  if (shToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: shToken,
      }),
    );
  }
};

const bankList = (req: Request, res: Response) => {
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
          bankName: '@string',
          currency: '@string',
          status: 'enabled',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

const bankCreate = (req: Request, res: Response) => {
  const {
    body: {
      bank: { bankName, bankNameEn, addr, addrEn, swiftCode, bankAccount, currency, jhBankAccount },
    },
  } = req;
  if (
    bankName &&
    bankNameEn &&
    addr &&
    addrEn &&
    swiftCode &&
    bankAccount &&
    currency &&
    jhBankAccount
  ) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer',
      }),
    );
  }
};

const bankChange = (req: Request, res: Response) => {
  const {
    params: { bankToken },
    body: {
      bank: { bankName, bankNameEn, addr, addrEn, swiftCode, bankAccount, currency, jhBankAccount },
    },
  } = req;
  if (
    bankToken &&
    bankName &&
    bankNameEn &&
    addr &&
    addrEn &&
    swiftCode &&
    bankAccount &&
    currency &&
    jhBankAccount
  ) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer',
      }),
    );
  }
};

const bankState = (req: Request, res: Response) => {
  const {
    params: { bankToken },
    query: { val },
  } = req;
  if (bankToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: bankToken,
      }),
    );
  }
};

const bankDelete = (req: Request, res: Response) => {
  const {
    params: { bankToken },
  } = req;
  if (bankToken) {
    res.send(
      mockjs.mock({
        code: 200,
        message: 'success',
      }),
    );
  }
};

export default {
  'GET /api/trade/cost/shs': ShList,
  'GET /api/trade/cost/sh/:shToken/detail': ShDetail,
  'POST /api/trade/cost/sh': ShCreate,
  'PUT /api/trade/cost/sh/:shToken/step/return': ShStepReturn,
  'PUT /api/trade/cost/sh/:shToken/step/pass': ShStepPass,
  'PUT /api/trade/cost/sh/:shToken/step/affirm': ShAffirm,
  'PUT /api/trade/cost/sh/:shToken/step/verify': ShVerify,
  'PUT /api/trade/cost/sh/:shToken/step/reaffirm': ShReaffirm,
  'GET /api/trade/cost/banks': bankList,
  'POST /api/trade/cost/bank': bankCreate,
  'PUT /api/trade/cost/bank/:bankToken': bankChange,
  'PUT /api/trade/cost/bank/:bankToken/state': bankState,
  'Delete /trade/cost/bank/:bankToken': bankDelete,
};
