export type ListProps<T> = {
  data: T[];
  renderer: () => string[];
};
