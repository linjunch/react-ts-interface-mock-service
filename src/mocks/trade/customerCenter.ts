import { Request, Response } from 'express';
import mockjs from 'mockjs';

const visitList = (req: Request, res: Response) => {
  const {
    params: { customerType },
    query: { token, page, size },
  } = req;
  if (customerType && token) {
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

const visitDetail = (req: Request, res: Response) => {
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

const visitCreate = (req: Request, res: Response) => {
  const {
    params: { customerType },
    query: { token },
    body: {
      visit: { visitDate, method, isLeader },
    },
  } = req;
  if (customerType && token && visitDate && method && isLeader) {
    res.send(
      mockjs.mock({
        code: 200,
        token,
      }),
    );
  }
};

const potentialCustomersList = (req: Request, res: Response) => {
  const {
    params: { customerType },
    query: { token },
  } = req;
  if (customerType && token) {
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

const potentialCustomersCreate = (req: Request, res: Response) => {
  const {
    params: { customerType },
    query: { token },
    body: {
      remark: { remark },
    },
  } = req;
  if (customerType && token && remark) {
    res.send(
      mockjs.mock({
        code: 200,
        token,
      }),
    );
  }
};

const contactList = (req: Request, res: Response) => {
  const {
    params: { customerType },
    query: { token },
  } = req;
  if (customerType && token) {
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

const contactCreate = (req: Request, res: Response) => {
  const {
    params: { customerType },
    query: { token },
    body: {
      contact: { name, sex, position },
    },
  } = req;
  if (customerType && token && name && sex && position) {
    res.send(
      mockjs.mock({
        code: 200,
        token,
      }),
    );
  }
};

const contactChange = (req: Request, res: Response) => {
  const {
    params: { contactToken },
    body: {
      contact: { name, sex, position },
    },
  } = req;
  if (contactToken && name && sex && position) {
    res.send(
      mockjs.mock({
        code: 200,
        token: contactToken,
      }),
    );
  }
};

export default {
  'GET /api/trade/sales/:customerType/visits': visitList,
  'GET /api/trade/sales/visit/:visitToken/detail': visitDetail,
  'POST /api/trade/sales/:customerType/visit': visitCreate,
  'GET /api/trade/sales/:customerType/remarks': potentialCustomersList,
  'POST /api/trade/sales/:customerType/remark': potentialCustomersCreate,
  'GET /api/trade/sales/:customerType/contacts': contactList,
  'POST /api/trade/sales/:customerType/contact': contactCreate,
  'PUT /api/trade/sales/contact/:contactToken': contactChange,
};
