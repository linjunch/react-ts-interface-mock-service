import { Request, Response } from 'express';
import mockjs from 'mockjs';

const salemanList = (req: Request, res: Response) => {
  const { companyType } = req.params;
  const { size, page } = req.query;
  if (companyType) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            managerId: '@int',
            account: '@string',
            name: '@string',
            cellphone: '@string',
            capacity: 20,
            status: 'enabled',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

const salemanCreate = (req: Request, res: Response) => {
  const { companyType } = req.params;
  const { managerId, capacity } = req.body;
  if (companyType && managerId && capacity) {
    res.send(
      mockjs.mock({
        code: 200,
        token: managerId,
      }),
    );
  }
};

const salemanCapacity = (req: Request, res: Response) => {
  const { companyType, salemanToken } = req.params;
  const { capacity } = req.body;
  if (companyType && salemanToken && capacity) {
    res.send(
      mockjs.mock({
        code: 200,
        token: salemanToken,
      }),
    );
  }
};

const salemanState = (req: Request, res: Response) => {
  const { companyType, salemanToken } = req.params;
  const { val } = req.query;
  if (companyType && salemanToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: salemanToken,
      }),
    );
  }
};

export default {
  'GET /api/:companyType/admin/salemans': salemanList,
  'POST /api/:companyType/admin/saleman': salemanCreate,
  'PUT /api/:companyType/admin/saleman/:salemanToken/capacity': salemanCapacity,
  'PUT /api/:companyType/admin/saleman/:salemanToken/state': salemanState,
};
