import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 基本资料详情接口
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

// 基本资料修改接口
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

// 自营发货人列表接口
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

// 自营发货人详情接口
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

// 自营发货人创建接口
const tradeCreate = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@integer(int64)',
    }),
  );
};

// 自营发货人修改接口
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

// 自营发货人状态接口
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

// 生产单位列表接口
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

// 生产单位详情接口
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

// 生产单位创建接口
const factoryCreate = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@integer(int64)',
    }),
  );
};

// 生产单位修改接口
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

// 生产单位状态接口
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

// 生产单位指派列表接口
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

// 生产单位指派创建接口
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

// 生产单位指派状态接口
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

// 生产单位指派删除接口
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

// 销售单位列表接口
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

// 销售单位详情接口
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

// 销售单位创建接口
const ownerCreate = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@integer(int64)',
    }),
  );
};

// 销售单位修改接口
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

// 销售单位状态接口
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
