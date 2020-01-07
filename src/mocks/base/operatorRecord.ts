import { Request, Response } from 'express';
import { mockList, MockDataSourceType } from './../utils/index';

const checkMessage = (req: Request, res: Response) => {
  const { companyType, recordType, token } = req.params;
  const { page, size } = req.query;
  const dataSource: MockDataSourceType[] = [
    {
      'elems|20': ['no', 'operator', 'operDate', 'operType', 'detail'],
    },
  ];
  if (companyType && recordType && token) {
    res.send(mockList(5, page, size, dataSource));
  }
};

export default {
  'GET /api/:companyType/common/record/:recordType/:token': checkMessage,
};
