import { Request, Response } from 'express';
import mockjs from 'mockjs';

const contractList = (req: Request, res: Response) => {
  const { size, page } = req.query;
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

const contractDetail = (req: Request, res: Response) => {
  const { contractToken } = req.params;
  if (contractToken) {
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
          owneName: '@string',
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
  }
};

const contractSign = (req: Request, res: Response) => {
  const { contractToken } = req.params;
  const { primData } = req.body;
  if (contractToken && primData[0]) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@int',
      }),
    );
  }
};

const contractRefuse = (req: Request, res: Response) => {
  const { contractToken } = req.params;
  if (contractToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@int',
      }),
    );
  }
};

export default {
  'GET /api/supplier/admin/contracts': contractList,
  'GET /api/supplier/admin/contract/:contractToken/detail': contractDetail,
  'PUT /api/supplier/admin/contract/:contractToken/step/sign': contractSign,
  'PUT /api/supplier/admin/contract/:contractToken/step/refuse': contractRefuse,
};
