import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 客户列表接口
const adminSupplierList = (req: Request, res: Response) => {
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
const adminSupplierDetail = (req: Request, res: Response) => {
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

// 协议列表接口
const adminContractlist = (req: Request, res: Response) => {
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

// 协议状态接口
const adminContractState = (req: Request, res: Response) => {
  const {
    params: { contractToken },
    query: { val },
  } = req;
  if (contractToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: contractToken,
      }),
    );
  }
};

// 默认账号详情接口
const adminAccountDetail = (req: Request, res: Response) => {
  const {
    params: { supplierToken },
  } = req;
  if (supplierToken) {
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

// 客户创建接口
const adminSupplierCreate = (req: Request, res: Response) => {
  const {
    body: {
      supplier: {
        account,
        company: { contacts, cellphone, companyName },
        password,
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

// 客户拜访列表接口
const adminVisitList = (req: Request, res: Response) => {
  const {
    params: { token },
    query: { page, size },
  } = req;
  if (token) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            id: '@integer',
            visitDate: '@datetime',
            method: '@string',
            isLeader: false,
            purpose: '@string',
            contact: '@string',
            cellphone: '@string',
            describe: '@string',
            insUser: '@string',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

// 客户拜访详情接口
const adminVisitDetail = (req: Request, res: Response) => {
  const {
    params: { visitToken },
  } = req;
  if (visitToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          customerName: '@string',
          visitDate: '@datetime',
          method: '@string',
          isLeader: false,
          purpose: '@string',
          contact: '@string',
          cellphone: '@string',
          describe: '@string',
          file: '@url',
          insUser: '@string',
          insDate: '@datetime',
        },
      }),
    );
  }
};

// 客户备注列表接口
const adminCustomerRemarks = (req: Request, res: Response) => {
  const {
    query: { token },
  } = req;
  if (token) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            remark: '@string',
            insDate: '@datetime',
          },
        ],
      }),
    );
  }
};

// 联系人列表接口
const adminContactList = (req: Request, res: Response) => {
  const {
    query: { token },
  } = req;
  if (token) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            id: '@integer(0, 100)',
            name: '@string',
            sex: '@integer(0, 100)',
            position: '@string',
            telephone: '@string',
            cellphone: '@string',
            email: '@string',
            insDate: '@datetime',
          },
        ],
      }),
    );
  }
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
  'GET /api/trade/admin/suppliers': adminSupplierList,
  'GET /api/trade/admin/supplier/:supplierToken/detail': adminSupplierDetail,
  'GET /api/trade/admin/supplier/:supplierToken/factorys': adminFactoryList,
  'GET /api/trade/admin/factory/:factoryToken/detail': adminFactoryDetail,
  'GET /api/trade/admin/supplier/:supplierToken/owners': adminOwnerList,
  'GET /api/trade/admin/owner/:ownerToken/detail': adminOwnerDetail,
  'GET /api/trade/admin/supplier/:supplierToken/contracts': adminContractlist,
  'GET /api/trade/admin/contract/:contractToken/detail': adminContractDetail,
  'PUT /api/trade/admin/contract/:contractToken/state': adminContractState,
  'GET /api/trade/admin/supplier/:supplierToken/account': adminAccountDetail,
  'POST /api/trade/admin/supplier': adminSupplierCreate,
  'GET /api/trade/admin/supplier/visits': adminVisitList,
  'GET /api/trade/admin/visit/:visitToken/detail': adminVisitDetail,
  'GET /api/trade/admin/supplier/remarks': adminCustomerRemarks,
  'GET /api/trade/admin/supplier/contacts': adminContactList,
  'GET /api/trade/admin/supplier/:supplierToken/salesmen': adminSalesmenList,
  'POST /api/trade/admin/supplier/:supplierToken/salesman/:salesmanToken': adminSalesmenCreate,
  'POST /api/trade/admin/supplier/:supplierToken/salesman/:salesmanToken/state': adminSalesmenState,
  'DELETE /api/trade/admin/supplier/:supplierToken/salesman/:salesmanToken': adminSalesmenDelete,
};
