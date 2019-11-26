import { Request, Response } from 'express';
import mockjs from 'mockjs';

const roleList = (req: Request, res: Response) => {
  const { companyType } = req.params;
  const { size, page } = req.query;
  if (companyType) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            id: '@int',
            roleName: '@string',
            isRoot: false,
            insDate: '@datetime',
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

const roleDetail = (req: Request, res: Response) => {
  const { companyType, roleToken } = req.params;
  if (companyType && roleToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          id: '@int',
          roleName: '@string',
          levels: [
            {
              menu: '@string',
              level: ['@string'],
            },
          ],
          insUser: '@string',
          insDate: '@datetime',
          sort: '@integer(0, 100)',
          isRoot: false,
          status: 'enabled',
        },
      }),
    );
  }
};

const roleCreate = (req: Request, res: Response) => {
  const { companyType } = req.params;
  if (companyType) {
    const { roleName, sort } = req.body;
    if (roleName && sort) {
      res.send(
        mockjs.mock({
          code: 200,
          token: '@int',
        }),
      );
    }
  }
};

const roleChange = (req: Request, res: Response) => {
  const { companyType, roleToken } = req.params;
  if (companyType && roleToken) {
    res.send(
      mockjs.mock({
        code: 200,
        token: roleToken,
      }),
    );
  }
};

const roleState = (req: Request, res: Response) => {
  const { companyType, roleToken } = req.params;
  const { val } = req.query;
  if (companyType && roleToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: roleToken,
      }),
    );
  }
};

const adminList = (req: Request, res: Response) => {
  const { companyType } = req.params;
  const { page, size } = req.query;
  if (companyType) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: '@integer(0, 100)',
        elems: [
          {
            id: '@int',
            account: '@string',
            name: '@string',
            nameEn: '@string',
            cellphone: '@string',
            position: '@string',
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

const adminDetail = (req: Request, res: Response) => {
  const { companyType, managerToken } = req.params;
  if (companyType && managerToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          account: 'string',
          imageUrl: 'string',
          name: '@string',
          nameEn: '@string',
          sex: 0,
          birthday: '@date(yyyy-MM-dd)',
          cellphone: '@string',
          cellphoneNotice: true,
          email: '@string',
          emailNotice: true,
          defaultView: 'SS',
          insUser: '@string',
          insDate: '@datetime',
          loginDate: '@datetime',
          loginTimes: 10,
          loginIp: '@string',
          lastLoginDate: '@datetime',
          lastLoginIp: '@string',
          isRoot: false,
          qq: '@string',
          position: '@string',
          roleId: '@integer',
          status: 'enabled',
        },
      }),
    );
  }
};

const adminCreate = (req: Request, res: Response) => {
  const { companyType } = req.params;
  const { submit } = req.query;
  const { account, password, name, sex, cellphone } = req.body;
  if (companyType && submit && account && password && name && sex && cellphone) {
    res.send(
      mockjs.mock({
        code: 200,
        token: '@int',
      }),
    );
  }
};

const adminChange = (req: Request, res: Response) => {
  const { companyType, managerToken } = req.params;
  const { account, password, name, sex, cellphone } = req.body;
  if (companyType && managerToken && account && password && name && sex && cellphone) {
    res.send(
      mockjs.mock({
        code: 200,
        token: managerToken,
      }),
    );
  }
};

const adminState = (req: Request, res: Response) => {
  const { companyType, managerToken } = req.params;
  const { val } = req.query;
  if (companyType && managerToken && val) {
    res.send(
      mockjs.mock({
        code: 200,
        token: managerToken,
      }),
    );
  }
};

export default {
  'GET /api/:companyType/admin/roles': roleList,
  'GET /api/:companyType/admin/role/:roleToken/detail': roleDetail,
  'POST /api/:companyType/admin/role': roleCreate,
  'PUT /api/:companyType/admin/role/:roleToken': roleChange,
  'PUT /api/:companyType/admin/role/:roleToken/state': roleState,
  'GET /api/:companyType/admin/managers': adminList,
  'GET /api/:companyType/admin/manager/:managerToken/detail': adminDetail,
  'POST /api/:companyType/admin/manager': adminCreate,
  'POST /api/:companyType/admin/manager/:managerToken': adminChange,
  'PUT /api/:companyType/admin/manager/:managerToken/state': adminState,
};
