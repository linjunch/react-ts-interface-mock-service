import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 客户列表接口
const supplierList = (req: Request, res: Response) => {
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
const supplierDetail = (req: Request, res: Response) => {
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

// 协议列表接口
const contractList = (req: Request, res: Response) => {
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
            id: '@int',
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
const contractDetail = (req: Request, res: Response) => {
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

// 协议查验接口
const contractCheck = (req: Request, res: Response) => {
  const {
    params: { contractToken },
    body: {
      form: { primData },
    },
  } = req;
  if (contractToken && primData) {
    res.send(
      mockjs.mock({
        code: 200,
        token: contractToken,
      }),
    );
  }
};

// 协议创建接口
const contractCreate = (req: Request, res: Response) => {
  const {
    params: { supplierToken },
    query: { submit },
    body: {
      contract: {
        contractCode,
        serviceType,
        declareType,
        ownerCode,
        ownerName,
        deputy,
        deputyNo,
        fileCode,
        taxRate,
        subsidyRate,
        bankId,
        effectiveDate,
        expiryDate,
      },
    },
  } = req;
  if (
    supplierToken &&
    submit &&
    contractCode &&
    serviceType &&
    declareType &&
    ownerCode &&
    ownerName &&
    deputy &&
    deputyNo &&
    fileCode &&
    taxRate &&
    subsidyRate &&
    bankId &&
    effectiveDate &&
    expiryDate
  ) {
    res.send(
      mockjs.mock({
        code: 200,
        token: supplierToken,
      }),
    );
  }
};

// 协议修改接口
const contractChange = (req: Request, res: Response) => {
  const {
    params: { supplierToken, contractToken },
    query: { submit },
    body: {
      contract: {
        contractCode,
        serviceType,
        declareType,
        ownerCode,
        ownerName,
        deputy,
        deputyNo,
        fileCode,
        taxRate,
        subsidyRate,
        bankId,
        effectiveDate,
        expiryDate,
      },
    },
  } = req;
  if (
    supplierToken &&
    contractToken &&
    submit &&
    contractCode &&
    serviceType &&
    declareType &&
    ownerCode &&
    ownerName &&
    deputy &&
    deputyNo &&
    fileCode &&
    taxRate &&
    subsidyRate &&
    bankId &&
    effectiveDate &&
    expiryDate
  ) {
    res.send(
      mockjs.mock({
        code: 200,
        token: contractToken,
      }),
    );
  }
};

export default {
  'GET /api/trade/sales/suppliers': supplierList,
  'GET /api/trade/sales/supplier/:supplierToken/detail': supplierDetail,
  'GET /api/trade/sales/supplier/:supplierToken/factorys': factoryList,
  'GET /api/trade/sales/factory/:factoryToken/detail': factoryDetail,
  'GET /api/trade/sales/supplier/:supplierToken/owners': ownerList,
  'GET /api/trade/sales/owner/:ownerToken/detail': ownerDetail,
  'GET /api/trade/sales/supplier/:supplierToken/contracts': contractList,
  'GET /api/trade/sales/contract/:contractToken/detail': contractDetail,
  'PUT /api/trade/sales/contract/:contractToken/step/check': contractCheck,
  'POST /api/trade/sales/supplier/:supplierToken/contract': contractCreate,
  'PUT /api/trade/sales/supplier/:supplierToken/contract/:contractToken': contractChange,
};
