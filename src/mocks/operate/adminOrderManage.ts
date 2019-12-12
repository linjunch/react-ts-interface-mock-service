import { Request, Response } from 'express';
import mockjs from 'mockjs';

const adminOrderList = (req: Request, res: Response) => {
  const {
    query: { page, size },
  } = req;
  res.send(
    mockjs.mock({
      code: 200,
      elemTotal: '@integer(0, 100)',
      elems: [
        {
          id: '@integer',
          orderCode: '@string',
          piCode: '@string',
          piDate: '@date(yyyy-MM-dd)',
          buyer: '@string',
          tradeName: '@string',
          ownerName: '@string',
          insUser: '@string',
          insDate: '@datetime',
          isLock: false,
          status: 'enabled',
          step: 'draft',
        },
      ],
      page: page || 1,
      pageTotal: 5,
      size: size || 10,
    }),
  );
};

const adminOrderDetail = (req: Request, res: Response) => {
  const {
    params: { orderToken },
  } = req;
  orderToken &&
    res.send(
      mockjs.mock({
        code: 200,
        elem: {
          orderCode: '@string',
          supplierCode: '@string',
          contact: '@string',
          telephone: '@string',
          piCode: '@string',
          piDate: '@date(yyyy-MM-dd)',
          buyer: '@string',
          buyerAddr: '@string',
          tradeCode: '@string',
          tradeName: '@string',
          ownerCode: '@string',
          ownerName: '@string',
          ownerAddr: '@string',
          serviceType: 'NewService',
          declareType: 'ESRDeclare',
          declareMark: '@string',
          contractCode: '@string',
          remark: '@string',
          trafMode: '@string',
          iePort: '@string',
          cusPort: '@string',
          transMode: '@string',
          currency: '@string',
          tradeCountry: '@string',
          tradeArea: '@string',
          lcMode: '@string',
          lcModeOther: '@string',
          wrapType: '@string',
          volume: '@string',
          netWet: '@string',
          mark: '@string',
          containerList: [
            {
              no: '@integer(1, 100)',
              size: '20GP',
              count: 1,
              weight: '@float(0, 10000, 2, 2)',
            },
          ],
          deliveryDate: '@date(yyyy-MM-dd)',
          piFile: '@string',
          isCusSplit: false,
          isFumigate: false,
          isTruck: false,
          isShipping: false,
          insUser: '@string',
          createDate: '@datetime',
          isLock: false,
          status: 'enabled',
          step: 'draft',
        },
      }),
    );
};

const adminGoodsList = (req: Request, res: Response) => {
  const {
    params: { orderToken },
  } = req;
  if (orderToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 5,
        elems: [
          {
            id: '@integer',
            goodsId: '@string',
            goodsCode: '@string',
            goodsName: '@string',
            factoryName: '@string',
            insDate: '@datetime',
            model: '@string',
            imgUrl: '@url',
            dealQty: '@float',
            dealUnit: '@string',
            dealPrice: '@float',
            dealAmount: '@float',
          },
        ],
      }),
    );
  }
};

const adminContainerList = (req: Request, res: Response) => {
  const {
    params: { orderToken },
  } = req;
  if (orderToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 5,
        elems: [
          {
            id: '@integer',
            cNo: '@integer(1, 100)',
            cCode: '@string',
            cType: '20GP',
            weight: '@float(0, 1000000, 2, 2)',
            seal: '@string',
            gCount: '@float(0, 1000000, 2, 2)',
            packNo: '@integer(1, 100000)',
            trayCount: '@integer(1, 100000)',
            grossWet: '@float(0, 1000000, 2, 2)',
            netWet: '@float(0, 1000000, 2, 2)',
            volume: '@float(0, 1000000, 2, 2)',
            goodsList: [
              {
                no: '@integer(1, 100)',
                name: '@string',
                model: '@string',
                dealQty: '@float',
                dealUnit: '@string',
                pkgsQty: '@float(0, 1000000, 2, 2)',
                pkgsUnit: '@string',
                trayQty: '@integer(1, 100000)',
                grossWet: '@float(0, 1000000, 2, 2)',
                NetWet: '@float(0, 1000000, 2, 2)',
                volume: '@float(0, 1000000, 2, 2)',
              },
            ],
            img1Url: '@url',
            img2Url: '@url',
            img3Url: '@url',
            img4Url: '@url',
            img5Url: '@url',
            videoList: ['@url', '@url'],
          },
        ],
      }),
    );
  }
};

const adminOrderLock = (req: Request, res: Response) => {
  const {
    params: { orderToken, lockStatus },
  } = req;
  if (orderToken && lockStatus) {
    res.send(
      mockjs.mock({
        code: 200,
        token: orderToken,
      }),
    );
  }
};

export default {
  'GET /api/operator/admin/orders': adminOrderList,
  'GET /api/operator/admin/order/:orderToken/detail': adminOrderDetail,
  'GET /api/operator/admin/order/:orderToken/goodses': adminGoodsList,
  'GET /api/operator/admin/order/:orderToken/containers': adminContainerList,
  'PUT /api/operator/admin/order/:orderToken/:lockStatus': adminOrderLock,
};
