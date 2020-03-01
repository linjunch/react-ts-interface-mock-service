import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 客户列表接口
const customerList = (req: Request, res: Response) => {
  const {
    params: { type },
    query: { page, size },
  } = req;
  type &&
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            id: '@integer',
            supplierCode: '@string',
            supplierName: '@string',
            region: '@string',
            contact: '@string',
            cellphone: '@string',
            insDate: '@datetime',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
};

// 客户详情接口
const customerDetail = (req: Request, res: Response) => {
  const {
    params: { supplierToken },
  } = req;
  supplierToken &&
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

// 生产单位列表接口
const factoryList = (req: Request, res: Response) => {
  const {
    params: { supplierToken },
    query: { page, size },
  } = req;
  supplierToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            id: '@integer',
            factoryCode: '@string',
            factoryName: '@string',
            region: '@string',
            contact: '@string',
            telephone: '@string',
            cellphone: '@string',
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

// 生产单位详情接口
const factoryDetail = (req: Request, res: Response) => {
  const {
    params: { factoryToken },
  } = req;
  factoryToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          factoryCode: '@string',
          factoryName: '@string',
          scc: '@string',
          taxCode: '@string',
          licenseUrl: '@url',
          regionCode: '@string',
          region: '@string',
          address: '@string',
          contact: '@string',
          telephone: '@string',
          insUser: '@string',
          cellphone: '@string',
          insDate: '@datetime',
          status: 'enabled',
          step: 'draft',
        },
      }),
    );
};

// 生产单位审核接口
const factoryStep = (req: Request, res: Response) => {
  const {
    params: { factoryToken, checkStep },
  } = req;
  if (factoryToken && checkStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: factoryToken,
      }),
    );
  }
};

// 销售单位列表接口
const ownerList = (req: Request, res: Response) => {
  const {
    params: { supplierToken },
    query: { page, size },
  } = req;
  supplierToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            id: '@integer',
            ownerCode: '@string',
            ownerName: '@string',
            region: '@string',
            contact: '@string',
            telephone: '@string',
            cellphone: '@string',
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

// 销售单位详情接口
const ownerDetail = (req: Request, res: Response) => {
  const {
    params: { ownerToken },
  } = req;
  ownerToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          ownerCode: '@string',
          ownerName: '@string',
          ownerNameEn: '@string',
          ownerKey: '@string',
          scc: '@string',
          cusCode: '@string',
          taxCode: '@string',
          licenseUrl: '@url',
          regionCode: '@string',
          region: '@string',
          address: '@string',
          contact: '@string',
          telephone: '@string',
          cellphone: '@string',
          bankName: '@string',
          bankNo: '@string',
          companyMode: '@string',
          ownerType: '@string',
          insUser: '@string',
          insDate: '@datetime',
          status: 'enabled',
          step: 'draft',
        },
      }),
    );
};

// 销售单位审核接口
const ownerStep = (req: Request, res: Response) => {
  const {
    params: { ownerToken, checkStep },
  } = req;
  if (ownerToken && checkStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ownerToken,
      }),
    );
  }
};

// 自营发货人列表接口
const tradeList = (req: Request, res: Response) => {
  const {
    params: { supplierToken },
    query: { page, size },
  } = req;
  supplierToken &&
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
            step: 'draft',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
};

// 自营发货人详情接口
const tradeDetail = (req: Request, res: Response) => {
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
          tradeNameEn: '@string',
          scc: '@string',
          cusCode: '@string',
          regionCode: '@string',
          region: '@string',
          address: '@string',
          contact: '@string',
          telephone: '@string',
          cellphone: '@string',
          insUser: '@string',
          insDate: '@datetime',
          status: 'enabled',
          step: 'draft',
        },
      }),
    );
};

// 自营发货人审核接口
const tradeStep = (req: Request, res: Response) => {
  const {
    params: { tradeToken, checkStep },
  } = req;
  if (tradeToken && checkStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: tradeToken,
      }),
    );
  }
};

// 自营发货人锁接口
const tradeLock = (req: Request, res: Response) => {
  const {
    params: { tradeToken, lockStatus },
  } = req;
  if (tradeToken && lockStatus) {
    res.send(
      mockjs.mock({
        code: 200,
        token: tradeToken,
      }),
    );
  }
};

export default {
  'GET /api/operator/service/suppliers/:type': customerList,
  'GET /api/operator/service/supplier/:supplierToken/detail': customerDetail,
  'GET /api/operator/service/supplier/:supplierToken/factorys': factoryList,
  'GET /api/operator/service/factory/:factoryToken/detail': factoryDetail,
  'PUT /api/operator/service/factory/:factoryToken/step/:checkStep': factoryStep,
  'GET /api/operator/service/supplier/:supplierToken/owners': ownerList,
  'GET /api/operator/service/owner/:ownerToken/detail': ownerDetail,
  'PUT /api/operator/service/owner/:ownerToken/step/:checkStep': ownerStep,
  'GET /api/operator/service/supplier/:supplierToken/trades': tradeList,
  'GET /api/operator/service/trade/:tradeToken/detail': tradeDetail,
  'PUT /api/operator/service/trade/:tradeToken/step/:checkStep': tradeStep,
  'PUT /api/operator/service/trade/:tradeToken/:lockStatus': tradeLock,
};
