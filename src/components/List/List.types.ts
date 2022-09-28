export type ListProps<T> = {
  data: T[];
  renderer?: () => void;
};
