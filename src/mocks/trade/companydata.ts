import { Request, Response } from 'express';
import mockjs from 'mockjs';

const baseDataDetail = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      elem: {
        companyCode: '@string',
        companyName: '@string',
        regionCode: '@string',
        region: '@string',
        address: '@string',
        contact: '@string',
        telephone: '@string',
        cellphone: '@string',
        logoUrl: '@url',
        companyMode: 'production',
      },
    }),
  );
};

const baseDataChange = (req: Request, res: Response) => {
  const {
    body: {
      company: { regionCode, region, address, contact, telephone, cellphone, companyMode },
    },
  } = req;
  if (regionCode && region && address && contact && telephone && cellphone && companyMode) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer',
      }),
    );
  }
};

const infoDetail = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      elem: {
        scc: '@string',
        tradeName: '@string',
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

const InfoChange = (req: Request, res: Response) => {
  const {
    body: { company },
  } = req;
  if (company) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer',
      }),
    );
  }
};
export default {
  'GET /api/trade/admin/company/detail': baseDataDetail,
  'PUT /api/trade/admin/company': baseDataChange,
  'GET /api/trade/admin/company/info': infoDetail,
  'PUT /api/trade/admin/company/info/step': InfoChange,
};
