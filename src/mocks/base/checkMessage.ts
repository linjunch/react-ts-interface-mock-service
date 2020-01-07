import { Request, Response } from 'express';
import { mockItem, MockDataSourceType } from './../utils/index';

const checkMessage = (req: Request, res: Response) => {
  const { companyType, trendsType, token } = req.params;
  const dataSource: MockDataSourceType[] = [
    { elem: ['SS', 'SA', 'TS', 'TC', 'TA', 'OS', 'OC', 'OA'] },
  ];
  if (companyType && trendsType && token) {
    res.send(mockItem(dataSource));
  }
};

export default {
  'GET /api/:companyType/common/trends/:trendsType/:token': checkMessage,
};
