type MyPartial<T> = {
  [P in keyof T]?: MyPartial<T[P]>;
};
type MyRequired<T> = {
  [P in keyof T]-?: MyRequired<T[P]>;
};

export type PickRequired<T, K extends keyof T> = MyRequired<Pick<T, K>> & Omit<T, K>;
export type PickPartial<T, K extends keyof T> = MyPartial<T> & Omit<T, K>;

// interface Row {
//   user?: string;
//   email?: string;
//   id?: number;
//   vip?: boolean;
// }

// type Test = Record<'id', string> & Omit<Row, 'id'>;

// const x: Test = {
//   user: '123',
//   email: '123',
//   id: 'string',
//   vip: false,
// };

