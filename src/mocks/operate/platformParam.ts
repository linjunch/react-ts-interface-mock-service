import { Request, Response } from 'express';
import mockjs from 'mockjs';

const admittanceChange = (req: Request, res: Response) => {
  const {
    body: {
      admittance: { admittance },
    },
  } = req;
  admittance &&
    res.send(
      mockjs.mock({
        code: 200,
        url: '/operator/admin/contract/admittance',
      }),
    );
};
const examineChange = (req: Request, res: Response) => {
  const {
    body: {
      examine: { examine },
    },
  } = req;
  examine &&
    res.send(
      mockjs.mock({
        code: 200,
        url: '/operator/admin/contract/examine',
      }),
    );
};

export default {
  'PUT /api/operator/admin/contract/admittance/alter': admittanceChange,
  'PUT /api/operator/admin/contract/examine/alter': examineChange,
};
