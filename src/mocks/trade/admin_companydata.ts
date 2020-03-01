import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 基本资料详情接口
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

// 基本资料修改接口
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

// 认证信息详情接口
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

// 认证信息修改接口
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
