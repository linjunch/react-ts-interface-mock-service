import { Request, Response } from 'express';
import mockjs from 'mockjs';

// 订单列表接口
const orderList = (req: Request, res: Response) => {
  const { size, page } = req.query;
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
          factoryName: '@string',
          ownerName: '@string',
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

// 订单详情接口
const orderDetail = (req: Request, res: Response) => {
  const { orderToken } = req.params;
  if (orderToken) {
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
          agentType: 'ESRDeclare',
          agentMark: '@string',
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
  }
};

// 订单创建接口
const orderCreate = (req: Request, res: Response) => {
  const {
    query: { submit },
    body: {
      piCode,
      piDate,
      buyer,
      buyerAddr,
      tradeCode,
      tradeName,
      ownerCode,
      ownerName,
      contractCode,
      trafMode,
      iePort,
      cusPort,
      transMode,
      currency,
      tradeCountry,
      tradeArea,
      lcMode,
      wrapType,
      netWet,
      deliveryDate,
    },
  } = req;
  if (submit) {
    if (
      piCode &&
      piDate &&
      buyer &&
      buyerAddr &&
      tradeCode &&
      tradeName &&
      ownerCode &&
      ownerName &&
      contractCode &&
      trafMode &&
      iePort &&
      cusPort &&
      transMode &&
      currency &&
      tradeCountry &&
      tradeArea &&
      lcMode &&
      wrapType &&
      netWet &&
      deliveryDate
    ) {
      res.send(
        mockjs.mock({
          code: 200,
          token: '@int',
        }),
      );
    }
  }
};

// 订单修改接口
const orderChange = (req: Request, res: Response) => {
  const { orderToken } = req.params;
  const { submit } = req.query;
  const {
    piCode,
    piDate,
    buyer,
    buyerAddr,
    tradeCode,
    tradeName,
    ownerCode,
    ownerName,
    contractCode,
    trafMode,
    iePort,
    cusPort,
    transMode,
    currency,
    tradeCountry,
    tradeArea,
    lcMode,
    wrapType,
    netWet,
    deliveryDate,
  } = req.body;
  if (submit && orderToken) {
    if (
      piCode &&
      piDate &&
      buyer &&
      buyerAddr &&
      tradeCode &&
      tradeName &&
      ownerCode &&
      ownerName &&
      contractCode &&
      trafMode &&
      iePort &&
      cusPort &&
      transMode &&
      currency &&
      tradeCountry &&
      tradeArea &&
      lcMode &&
      wrapType &&
      netWet &&
      deliveryDate
    ) {
      res.send(
        mockjs.mock({
          code: 200,
          token: orderToken,
        }),
      );
    }
  }
};

// 唛头修改接口
const shippingMark = (req: Request, res: Response) => {
  const { orderToken } = req.params;
  const { mark } = req.body;
  if (orderToken && mark) {
    res.send(
      mockjs.mock({
        code: 200,
        token: orderToken,
      }),
    );
  }
};

//  资源下载接口
const downlaod = (req: Request, res: Response) => {
  const { orderToken } = req.params;
  const { Type } = req.query;
  if (orderToken && Type) {
    res.send(
      mockjs.mock({
        code: 200,
      }),
    );
  }
};

// 商品列表接口
const goodsList = (req: Request, res: Response) => {
  const { orderToken } = req.params;
  if (orderToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 5,
        elems: [
          {
            id: '@int',
            goodsId: '@int',
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

// 商品创建接口
const goodsCreate = (req: Request, res: Response) => {
  const { orderToken } = req.params;
  const { goodsId, dealQty, dealPrice, dealAmount } = req.body;
  if (orderToken && goodsId && dealQty && dealPrice && dealAmount) {
    res.send(
      mockjs.mock({
        code: 200,
        token: orderToken,
      }),
    );
  }
};

// 商品修改接口
const goodsChange = (req: Request, res: Response) => {
  const { orderToken, goodsToken } = req.params;
  const { dealQty, dealPrice, dealAmount } = req.body;
  if (orderToken && goodsToken && dealQty && dealPrice && dealAmount) {
    res.send(
      mockjs.mock({
        code: 200,
        token: orderToken,
      }),
    );
  }
};

// 商品删除接口
const goodsDelete = (req: Request, res: Response) => {
  const { orderToken, goodsToken } = req.params;
  if (orderToken && goodsToken) {
    res.send(
      mockjs.mock({
        code: 200,
        message: 'success',
      }),
    );
  }
};

// 装柜列表接口
const containerList = (req: Request, res: Response) => {
  const { orderToken } = req.params;
  if (orderToken) {
    res.send(
      mockjs.mock({
        code: 200,
        elemTotal: 5,
        elems: [
          {
            id: '@int',
            contNo: '@integer(1, 100)',
            contCode: '@string',
            contType: '20GP',
            weight: '@float(0, 1000000, 2, 2)',
            seal: '@string',
            goodsCount: '@float(0, 1000000, 2, 2)',
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

// 装柜创建接口
const containerCreate = (req: Request, res: Response) => {
  const { orderToken } = req.params;
  const { submit } = req.query;
  const { contNo, contCode, contType, goodsList } = req.body;
  if (orderToken && submit && contNo && contCode && contType && goodsList[0]) {
    res.send(
      mockjs.mock({
        code: 200,
        token: orderToken,
      }),
    );
  }
};

// 装柜修改接口
const containerChange = (req: Request, res: Response) => {
  const { orderToken, containerToken } = req.params;
  const { contNo, contCode, contType, goodsList } = req.body;
  if (orderToken && containerToken && contNo && contCode && contType && goodsList[0]) {
    res.send(
      mockjs.mock({
        code: 200,
        token: orderToken,
      }),
    );
  }
};

// 装柜删除接口
const containerDelete = (req: Request, res: Response) => {
  const { orderToken, containerToken } = req.params;
  if (orderToken && containerToken) {
    res.send(
      mockjs.mock({
        code: 200,
        message: 'success',
      }),
    );
  }
};

export default {
  'GET /api/supplier/sales/orders': orderList,
  'GET /api/supplier/sales/order/:orderToken/detail': orderDetail,
  'POST /api/supplier/sales/order': orderCreate,
  'PUT /api/supplier/sales/order/:orderToken': orderChange,
  'PUT /api/supplier/sales/order/:orderToken/mark': shippingMark,
  'GET /api/supplier/sales/order/:orderToken/downlaod': downlaod,
  'GET /api/supplier/sales/order/:orderToken/goodses': goodsList,
  'POST /api/supplier/sales/order/:orderToken/goods': goodsCreate,
  'PUT /api/supplier/sales/order/:orderToken/goods/:goodsToken': goodsChange,
  'Delete /api/supplier/sales/order/:orderToken/goods/:goodsToken': goodsDelete,
  'GET /api/supplier/sales/order/:orderToken/containers': containerList,
  'POST /api/supplier/sales/order/:orderToken/container': containerCreate,
  'PUT /supplier/sales/order/:orderToken/container/:containerToken': containerChange,
  'Delete /supplier/sales/order/:orderToken/container/:containerToken': containerDelete,
};
