import { Request, Response } from 'express';
import mockjs from 'mockjs';

const checkMessage = (req: Request, res: Response) => {
  const { companyType, recordType, token } = req.params;
  const { page, size } = req.query;
  if (companyType && recordType && token) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            no: '@integer(1, 100)',
            operator: '@string',
            operDate: '@datetime',
            operType: '@string',
            detail: '@string',
          },
        ],
        page: page || 1,
        pageTotal: 5,
        size: size || 10,
      }),
    );
  }
};

export default {
  'GET /api/:companyType/common/record/:recordType/:token': checkMessage,
};
