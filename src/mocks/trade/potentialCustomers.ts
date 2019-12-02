import { Request, Response } from 'express';
import mockjs from 'mockjs';

const potentialCustomersList = (req: Request, res: Response) => {
  const {
    params: { type },
    query: { page, size },
  } = req;
  if (type) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            id: '@integer',
            customerCode: '@string',
            customerName: '@string',
            companyMode: '@string',
            region: '@string',
            contact: '@string',
            telephone: '@string',
            cellphone: '@string',
            inputType: 'apply',
            insDate: '@datetime',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

const potentialCustomersDetail = (req: Request, res: Response) => {
  const {
    params: { customerToken },
  } = req;
  if (customerToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          customerCode: '@string',
          customerName: '@string',
          companyMode: '@string',
          regionCode: '@string',
          region: '@string',
          address: '@string',
          contact: '@string',
          telephone: '@string',
          insUser: '@string',
          cellphone: '@string',
          insDate: '@datetime',
          inputType: 'apply',
          managerId: '@integer',
        },
      }),
    );
  }
};

const potentialCustomersInclude = (req: Request, res: Response) => {
  const {
    params: { customerToken },
  } = req;
  if (customerToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: customerToken,
      }),
    );
  }
};

const potentialCustomersOutside = (req: Request, res: Response) => {
  const {
    params: { customerToken },
  } = req;
  if (customerToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: customerToken,
      }),
    );
  }
};

const potentialCustomersCreate = (req: Request, res: Response) => {
  res.send(
    mockjs.mock({
      code: 200,
      token: '@int',
    }),
  );
};

export default {
  'GET /api/trade/sales/customers': potentialCustomersList,
  'GET /api/trade/sales/customer/:customerToken/detail': potentialCustomersDetail,
  'PUT /api/trade/sales/customer/:customerToken/include': potentialCustomersInclude,
  'PUT /api/trade/sales/customer/:customerToken/outside': potentialCustomersOutside,
  'POST /api/trade/sales/customer': potentialCustomersCreate,
};
