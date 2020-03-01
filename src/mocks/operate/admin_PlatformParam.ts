import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 准入模板修改接口
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

// 查验模板修改接口
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
