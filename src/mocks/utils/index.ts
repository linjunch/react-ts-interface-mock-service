import mockjs from 'mockjs';
import map from './map';

type KeyType = keyof typeof map | MockDataSourceType;

export interface MockDataSourceType {
  [index: string]: KeyType[];
}

const renderData = (data: MockDataSourceType[]) => {
  const result = {};
  const keySpecialReg = /role|status|openAppStatus|documentType|mediaType|education|experience|defaultView/;
  data.forEach(item => {
    Object.keys(item).forEach(itemKey => {
      if (/[0-9]/.test(itemKey)) {
        item[itemKey].forEach(key => {
          if (typeof key === 'string') {
            if (!result[itemKey]) {
              result[itemKey] = [{}];
            }
            if (!keySpecialReg.test(key)) {
              Object.assign(result[itemKey][0], { [key]: map[key] });
            } else {
              Object.assign(result[itemKey][0], map[key]);
            }
          } else {
            Object.assign(result[itemKey][0], renderData([key]));
          }
        });
      } else {
        item[itemKey].forEach(key => {
          if (typeof key === 'string') {
            if (!result[itemKey]) {
              result[itemKey] = {};
            }
            if (!keySpecialReg.test(key)) {
              Object.assign(result[itemKey], { [key]: map[key] });
            } else {
              Object.assign(result[itemKey], map[key]);
            }
          } else {
            Object.assign(result[itemKey], renderData([key]));
          }
        });
      }
    });
  });
  return result;
};

export const mockList = (
  total: number,
  page: number,
  size: number, 
  dataSource: MockDataSourceType[],
) => {
  const result = renderData(dataSource);
  return mockjs.mock({
    code: 0,
    elemTotal: total,  
    page,
    pageTotal: Math.ceil(total / size),
    size,
    ...result,
  });
};

export const mockItem = (dataSource: MockDataSourceType[]) => {
  const result = renderData(dataSource);
  return mockjs.mock({
    code: 0,
    ...result,
  });
};

const dataSource: MockDataSourceType[] = [
  {
    'elems|20': ['operator', 'operDate', { 'items|11': ['detail'] }],
  },
];

const dataSource2: MockDataSourceType[] = [
  {
    elem: ['detail', 'operator'],
  },
];
