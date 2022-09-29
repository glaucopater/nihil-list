import { Key } from "react";

export type ListProps<T> = {
  data: T[];
  renderer: () => string[];
};

export interface JsonType {
  [key: string]: number | string;
}


export type CustomKey =  Key | null | undefined;