import { Request, Response } from 'express';
import mockjs from 'mockjs';
import { mockItem, mockList, MockDataSourceType } from './../utils/index';

const login = (req: Request, res: Response) => {
  const { companyType } = req.params;
  const { account } = req.body;
  const dataSource: MockDataSourceType[] = [
    { elem: ['account', 'imageUrl', 'root', 'userName', 'defaultView', 'roleId'] },
  ];
  if (companyType && account) {
    res.send(mockItem(dataSource));
  }
};

const register = (req: Request, res: Response) => {
  const { companyType } = req.params;
  const { source } = req.query;
  if (companyType && source) {
    const { account, password, company } = req.body;
    if (account && password && company) {
      res.send(
        mockjs.mock({
          account: 'string',
          company: {
            cellphone: 'string',
            companyName: 'string',
            contacts: 'string',
          },
          password: 'string',
        }),
      );
    }
  }
};

const memberDetail = (req: Request, res: Response) => {
  const { companyType } = req.params;
  if (companyType) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          account: '@string',
          imageUrl: '@string',
          name: '@string',
          nameEn: '@string',
          'sex| 1': [0, 1],
          birthday: '@string',
          cellphone: '@string',
          cellphoneNotice: true,
          email: '@string',
          emailNotice: true,
          qq: '@string',
          position: '@string',
        },
      }),
    );
  }
};

const changeMemberPassword = (req: Request, res: Response) => {
  const { companyType } = req.params;
  if (companyType) {
    const { password } = req.body;
    if (password) {
      res.send(
        mockjs.mock({
          code: 200,
          elem: {
            account: '@string',
          },
        }),
      );
    }
  }
};

const logout = (req: Request, res: Response) => {
  const { companyType } = req.params;
  if (companyType) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          account: '@string',
        },
      }),
    );
  }
};

const weChatBinding = (req: Request, res: Response) => {
  const { companyType } = req.params;
  if (companyType) {
    const { wx } = req.body;
    if (wx) {
      res.send(
        mockjs.mock({
          code: 200,
          elem: {
            wx: '@string',
          },
        }),
      );
    }
  }
};

const phoneBinding = (req: Request, res: Response) => {
  const { companyType } = req.params;
  if (companyType) {
    const { cellphone } = req.body;
    if (cellphone) {
      res.send(
        mockjs.mock({
          code: 200,
          elem: {
            cellphone: '@string',
          },
        }),
      );
    }
  }
};

const emailBinding = (req: Request, res: Response) => {
  const { companyType } = req.params;
  if (companyType) {
    const { email } = req.body;
    if (email) {
      res.send(
        mockjs.mock({
          code: 200,
          elem: {
            email: '@string',
          },
        }),
      );
    }
  }
};

const memberLike = (req: Request, res: Response) => {
  const { companyType } = req.params;
  if (companyType) {
    const { defaultView } = req.body;
    if (defaultView) {
      res.send(
        mockjs.mock({
          defaultView,
        }),
      );
    }
  }
};

export default {
  'GET /api/:companyType/login': login,
  'POST /api/:companyType/register': register,
  'GET /api/:companyType/member/detail': memberDetail,
  'PUT /api/:companyType/member': changeMemberPassword,
  'GET /api/:companyType/logout': logout,
  'PUT /api/:companyType/member/wx': weChatBinding,
  'PUT /api/:companyType/member/cellphone': phoneBinding,
  'PUT /api/:companyType/member/email': emailBinding,
  'PUT /api/:companyType/member/like': memberLike,
};
