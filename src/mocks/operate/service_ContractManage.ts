import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 协议列表接口
const contractList = (req: Request, res: Response) => {
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

// 协议进度接口
const contractStep = (req: Request, res: Response) => {
  const {
    params: { contractToken, contractStep },
  } = req;
  if (contractToken && contractStep) {
    res.send(
      mockjs.mock({
        code: 200,
        token: contractToken,
      }),
    );
  }
};

export default {
  'GET /api/operator/service/contracts': contractList,
  'GET /api/operator/service/contract/:contractToken/detail': contractDetail,
  'PUT /api/operator/service/contract/:contractToken/step/:contractStep': contractStep,
};
