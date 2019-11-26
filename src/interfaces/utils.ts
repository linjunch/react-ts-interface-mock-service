type MyPartial<T> = {
  [P in keyof T]?: MyPartial<T[P]>;
};
type MyRequired<T> = {
  [P in keyof T]-?: MyRequired<T[P]>;
};

export type PickRequired<T, K extends keyof T> = MyRequired<Pick<T, K>> & Omit<T, K>;
export type PickPartial<T, K extends keyof T> = MyPartial<T> & Omit<T, K>;
