import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 客户列表接口
const adminCustomerList = (req: Request, res: Response) => {
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
const adminCustomerDetail = (req: Request, res: Response) => {
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
const adminFactoryList = (req: Request, res: Response) => {
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
const adminFactoryDetail = (req: Request, res: Response) => {
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

// 生产单位锁接口
const adminFactoryLock = (req: Request, res: Response) => {
  const {
    params: { factoryToken, lockStatus },
  } = req;
  if (factoryToken && lockStatus) {
    res.send(
      mockjs.mock({
        code: 200,
        token: factoryToken,
      }),
    );
  }
};

// 销售单位列表接口
const adminOwnerList = (req: Request, res: Response) => {
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
const adminOwnerDetail = (req: Request, res: Response) => {
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

// 销售单位锁接口
const adminOwnerlock = (req: Request, res: Response) => {
  const {
    params: { ownerToken, lockStatus },
  } = req;
  if (ownerToken && lockStatus) {
    res.send(
      mockjs.mock({
        code: 200,
        token: ownerToken,
      }),
    );
  }
};

// 自营发货人列表接口
const adminTradeList = (req: Request, res: Response) => {
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
const adminTradeDetail = (req: Request, res: Response) => {
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

// 协议列表接口
const adminContractList = (req: Request, res: Response) => {
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
            contractCode: '@string',
            tradeName: '@string',
            ownerName: '@string',
            taxRate: '@float',
            subsidyRate: '@float',
            effectiveDate: '@date(yyyy-MM-dd)',
            expiryDate: '@date(yyyy-MM-dd)',
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

// 协议详情接口
const adminContractDetail = (req: Request, res: Response) => {
  const {
    params: { contractToken },
  } = req;
  contractToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          contractCode: '@string',
          deputy: '@date(yyyy-MM-dd)',
          deputyNo: '@float(0, 10000000, 2, 2)',
          tradeName: '@string',
          supplierCode: '@string',
          serviceType: '@string',
          declareType: '@string',
          declareMark: '@string',
          ownerCode: '@string',
          ownerName: '@string',
          primDate: '@datetime',
          primData: [{}],
          checkData: [{}],
          checkDate: '@datetime',
          checkMan: '@string',
          fileCode: '@string',
          contractUrl: '@url',
          taxRate: '@float',
          subsidyRate: '@float',
          bankName: '@string',
          bankNameEn: '@string',
          bankAddr: '@string',
          bankAddrEn: '@string',
          bankSwift: '@string',
          bankCode: '@string',
          isVirtualAccount: false,
          effectiveDate: '@date(yyyy-MM-dd)',
          expiryDate: '@date(yyyy-MM-dd)',
          salesmanId: '@integer',
          salesman: '@string',
          insUser: '@string',
          insDate: '@datetime',
          isLock: false,
          status: 'enabled',
          contractStep: 'send',
        },
      }),
    );
};

// 客户指派列表接口
const adminSalesmenList = (req: Request, res: Response) => {
  const {
    params: { supplierToken },
  } = req;
  if (supplierToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 3,
        elems: [
          {
            'managerId    ': '@integer',
            managerName: '@string',
            status: 'enabled',
          },
        ],
      }),
    );
  }
};

// 客户指派创建接口
const adminSalesmenCreate = (req: Request, res: Response) => {
  const {
    params: { supplierToken, salesmanToken },
  } = req;
  if (supplierToken && salesmanToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: supplierToken,
      }),
    );
  }
};

// 客户指派状态接口
const adminSalesmenState = (req: Request, res: Response) => {
  const {
    params: { supplierToken, salesmanToken },
    query: { val },
  } = req;
  if (supplierToken && salesmanToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: supplierToken,
      }),
    );
  }
};

// 客户指派删除接口
const adminSalesmenDelete = (req: Request, res: Response) => {
  const {
    params: { supplierToken, salesmanToken },
  } = req;
  if (supplierToken && salesmanToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: supplierToken,
      }),
    );
  }
};

export default {
  'GET /api/operator/admin/suppliers/:type': adminCustomerList,
  'GET /api/operator/admin/supplier/:supplierToken/detail': adminCustomerDetail,
  'GET /api/operator/admin/supplier/:supplierToken/factorys': adminFactoryList,
  'GET /api/operator/admin/factory/:factoryToken/detail': adminFactoryDetail,
  'PUT /api/operator/admin/factory/:factoryToken/:lockStatus': adminFactoryLock,
  'GET /api/operator/admin/supplier/:supplierToken/owners': adminOwnerList,
  'GET /api/operator/admin/owner/:ownerToken/detail': adminOwnerDetail,
  'PUT /api/operator/admin/owner/:ownerToken/:lockStatus': adminOwnerlock,
  'GET /api/operator/admin/supplier/:supplierToken/trades': adminTradeList,
  'GET /api/operator/admin/trade/:tradeToken/detail': adminTradeDetail,
  'GET /api/operator/admin/supplier/:supplierToken/contracts': adminContractList,
  'GET /api/operator/admin/contract/:contractToken/detail': adminContractDetail,
  'GET /api/operator/admin/supplier/:supplierToken/salesmen': adminSalesmenList,
  'POST /api/operator/admin/supplier/:supplierToken/salesman/:salesmanToken': adminSalesmenCreate,
  'POST /api/operator/admin/supplier/:supplierToken/salesman/:salesmanToken/state': adminSalesmenState,
  'DELETE /api/operator/admin/supplier/:supplierToken/salesman/:salesmanToken': adminSalesmenDelete,
};
