import { Request, Response } from 'express';
import mockjs from 'mockjs';

const ensembleTradeList = (req: Request, res: Response) => {
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
          tradeName: '@string',
          region: '@string',
          contact: '@string',
          telephone: '@string',
          cellphone: '@string',
          insDate: '@datetime',
          status: 'enabled',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

const ensembleTradeDetail = (req: Request, res: Response) => {
  const {
    params: { tradeToken },
  } = req;
  tradeToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          tradeCode: '@string',
          tradeName: '@string',
          regionCode: '@string',
          region: '@string',
          address: '@string',
          contact: '@string',
          telephone: '@string',
          cellphone: '@string',
          logoUrl: '@url',
          companyMode: 'production',
          scc: '@string',
          taxCode: '@string',
          cusCode: '@string',
          licenseUrl: '@string',
          contrTpl1: '@url',
          contrTpl2: '@url',
          seal: '@url',
          siteAddr: '@string',
          isOwnSite: true,
          siteInsDate: '@datetime',
          checkStep: 'pass',
        },
      }),
    );
};

const ensembleTradeCreate = (req: Request, res: Response) => {
  const {
    body: {
      trade: {
        account,
        password,
        company: { contacts, cellphone, companyName },
      },
    },
  } = req;
  if (account && password && contacts && cellphone && companyName) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer',
      }),
    );
  }
};

const ensembleTradeState = (req: Request, res: Response) => {
  const {
    query: { val },
    params: { tradeToken },
  } = req;
  if (val && tradeToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: tradeToken,
      }),
    );
  }
};

const defaultAccount = (req: Request, res: Response) => {
  const {
    params: { tradeToken },
  } = req;
  if (tradeToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          account: '@string',
          password: '@string',
        },
      }),
    );
  }
};

export default {
  'GET /api/operator/admin/trades': ensembleTradeList,
  'GET /api/operator/admin/trade/:tradeToken/detail': ensembleTradeDetail,
  'POST /api/operator/admin/trade': ensembleTradeCreate,
  'POST /api/operator/admin/trade/:tradeToken/state': ensembleTradeState,
  'GET /api/operator/admin/trade/:tradeToken/account': defaultAccount,
};
