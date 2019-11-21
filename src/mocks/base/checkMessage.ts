import { Request, Response } from 'express';

const checkMessage = (req: Request, res: Response) => {
  const { companyType, trendsType, token } = req.params;
  if (companyType && trendsType && token) {
    res.send({
      code: 200,
      elem: {
        SS: false,
        SA: false,
        TS: false,
        TC: false,
        TA: false,
        OS: false,
        OC: false,
        OA: false,
      },
    });
  }
};

export default {
  'GET /api/:companyType/common/trends/:trendsType/:token': checkMessage,
};
