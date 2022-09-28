import { Key, SyntheticEvent, useContext } from "react";
import { ListProps } from "./List.types";
import "./List.style.css";
import UserContext, { ContextProps } from "../../contexts/UserContext";

export const List = <T,>({ data }: React.PropsWithChildren<ListProps<T>>) => {
  const initialStore = useContext(UserContext);

  const { store, updateStore } = (initialStore as ContextProps) || {};

  const handleOnClick =
    (index: Key | null | undefined) => (e: SyntheticEvent) => {
      updateStore(index);
    };

  const applySelectedClass = (index: number) => {
    return isSelectedItem(index) ? "selected" : "default";
  };

  const isSelectedItem = (index: number) => {
    return store && (store as number[]).includes(index as number);
  };

  return (
    <ul>
      {data?.map((item: T, index: Key | null | undefined) => {
        return (
          <li
            key={index}
            onClick={(e) => handleOnClick(index)(e)}
            className={applySelectedClass(index as number)}
          >
            {JSON.stringify(item)}
            {isSelectedItem(index as number) && (
              <span className="adornment">X</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
