export type ListProps<T> = {
  data: T[];
  renderer: () => string[];
};

export interface JsonType {
  [key: string]: number | string;
}
