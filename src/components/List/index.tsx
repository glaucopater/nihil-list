import { Key, SyntheticEvent, useContext } from "react";
import { ListProps } from "./List.types";
import "./List.style.css";
import UserContext, { ContextProps } from "../../contexts/UserContext";

export const List = <T,>({ data }: React.PropsWithChildren<ListProps<T>>) => {
  const initialStore = useContext(UserContext);

  const { updateStore } = (initialStore as ContextProps) || {};

  const handleOnClick =
    (index: Key | null | undefined) => (e: SyntheticEvent) => {
      updateStore(index);
    };

  return (
    <ul>
      {data?.map((item: T, index: Key | null | undefined) => {
        return (
          <li key={index} onClick={(e) => handleOnClick(index)(e)}>
            {JSON.stringify(item)}
          </li>
        );
      })}
    </ul>
  );
};
