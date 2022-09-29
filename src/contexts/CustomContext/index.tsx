import { createContext, Key } from "react";

export type ContextProps<T = object> = {
  store: T;
  updateStore: (index: Key | null | undefined) => void;
};

const CustomContext = createContext<ContextProps | undefined>(undefined);
export default CustomContext;
