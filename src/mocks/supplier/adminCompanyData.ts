import { Request, Response } from 'express';
import mockjs from 'mockjs';

const companyDetail = (req: Request, res: Response) => {
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
        tradeName: '@string',
      },
    }),
  );
};

const companyChange = (req: Request, res: Response) => {
  const {
    body: { regionCode, region, address, contact, telephone, cellphone, companyMode },
  } = req;
  if (regionCode && region && address && contact && telephone && cellphone && companyMode) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer(int64)',
      }),
    );
  }
};

const tradeList = (req: Request, res: Response) => {
  const { page, size } = req.query;
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

const tradeDetail = (req: Request, res: Response) => {
  const { ptradeToken } = req.params;
  ptradeToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          tradeName: '@string',
          tradeNameEn: '@string',
          scc: '@string',
          cusCode: '@string',
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

const tradeCreate = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@integer(int64)',
    }),
  );
};

const tradeChange = (req: Request, res: Response) => {
  const { tradeToken } = req.params;
  tradeToken &&
    res.send(
      mockjs.mock({
        code: 200,
        token: tradeToken,
      }),
    );
};

const tradeState = (req: Request, res: Response) => {
  const {
    params: { tradeToken },
    query: { val },
  } = req;
  if (tradeToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: tradeToken,
      }),
    );
  }
};

const factoryList = (req: Request, res: Response) => {
  const { page, size } = req.query;
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

const factoryDetail = (req: Request, res: Response) => {
  const { factoryToken } = req.params;
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

const factoryCreate = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@integer(int64)',
    }),
  );
};

const factoryChange = (req: Request, res: Response) => {
  const { factoryToken } = req.params;
  factoryToken &&
    res.send(
      mockjs.mock({
        code: 200,
        token: factoryToken,
      }),
    );
};

const factoryState = (req: Request, res: Response) => {
  const {
    params: { factoryToken },
    query: { val },
  } = req;
  if (factoryToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: factoryToken,
      }),
    );
  }
};

const factorySalesmenList = (req: Request, res: Response) => {
  const { factoryToken } = req.params;
  factoryToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 3,
        elems: [
          {
            managerId: '@integer',
            managerName: '@string',
            status: 'enabled',
          },
        ],
      }),
    );
};

const factorySalesmenCreate = (req: Request, res: Response) => {
  const { factoryToken, salesmanToken } = req.params;
  if (factoryToken && salesmanToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer(int64)',
      }),
    );
  }
};

const factorySalesmenState = (req: Request, res: Response) => {
  const { factoryToken, salesmanToken } = req.params;
  const { val } = req.query;
  if (factoryToken && salesmanToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer(int64)',
      }),
    );
  }
};

const factorySalesmenDelete = (req: Request, res: Response) => {
  const { factoryToken, salesmanToken } = req.params;
  if (factoryToken && salesmanToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@integer(int64)',
      }),
    );
  }
};

const ownerList = (req: Request, res: Response) => {
  const { page, size } = req.query;
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

const ownerDetail = (req: Request, res: Response) => {
  const { ownerToken } = req.params;
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

const ownerCreate = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@integer(int64)',
    }),
  );
};

const ownerChange = (req: Request, res: Response) => {
  const { ownerToken } = req.params;
  ownerToken &&
    res.send(
      mockjs.mock({
        code: 200,
        token: ownerToken,
      }),
    );
};

const ownerState = (req: Request, res: Response) => {
  const {
    params: { ownerToken },
    query: { val },
  } = req;
  if (ownerToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ownerToken,
      }),
    );
  }
};

export default {
  'GET /api/supplier/admin/company/detail': companyDetail,
  'PUT /api/supplier/admin/company': companyChange,
  'GET /api/supplier/admin/trades': tradeList,
  'GET /api/supplier/admin/trade/:tradeToken/detail': tradeDetail,
  'POST /api/supplier/admin/trade': tradeCreate,
  'PUT /api/supplier/admin/trade/:tradeToken': tradeChange,
  'PUT /api/supplier/admin/trade/:tradeToken/state': tradeState,
  'GET /api/supplier/admin/factorys': factoryList,
  'GET /api/supplier/admin/factory/:factoryToken/detail': factoryDetail,
  'POST /api/supplier/admin/factory': factoryCreate,
  'PUT /api/supplier/admin/factory/:factoryToken': factoryChange,
  'PUT /api/supplier/admin/factory/:factoryToken/state': factoryState,
  'GET /api/supplier/admin/factory/:factoryToken/salesmen': factorySalesmenList,
  'POST /api/supplier/admin/factory/:factoryToken/salesman/:salesmanToken': factorySalesmenCreate,
  'POST /api/supplier/admin/factory/:factoryToken/salesman/:salesmanToken/state': factorySalesmenState,
  'DELETE /api/supplier/admin/factory/:factoryToken/salesman/:salesmanToken': factorySalesmenDelete,
  'GET /api/supplier/admin/owners': ownerList,
  'GET /api/supplier/admin/owner/:ownerToken/detail': ownerDetail,
  'POST /api/supplier/admin/owner': ownerCreate,
  'PUT /api/supplier/admin/owner/:ownerToken': ownerChange,
  'PUT /api/supplier/admin/owner/:ownerToken/state': ownerState,
};
