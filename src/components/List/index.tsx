import { Key, SyntheticEvent, useContext } from "react";
import { JsonType, ListProps } from "./List.types";
import "./List.style.css";
import UserContext, { ContextProps } from "../../contexts/UserContext";
import { ItemCard } from "../ItemCard";

export const List = <T,>({
  data,
  renderer,
}: React.PropsWithChildren<ListProps<T>>) => {
  const initialStore = useContext(UserContext);

  const { store, updateStore } = (initialStore as ContextProps) || {};

  const handleOnClick =
    (index: Key | null | undefined) => (e: SyntheticEvent) => {
      updateStore(index);
    };

  const applySelectedClass = (index: number) => {
    return isSelectedItem(index) ? "item-selected" : "default";
  };

  const isSelectedItem = (index: number) => {
    return store && (store as number[]).includes(index as number);
  };

  return (
    <>
      <h2>Info</h2>
      <ul className="list">
        {data?.map((item, index: Key | null | undefined) => {
          return (
            <li
              key={index}
              onClick={(e) => handleOnClick(index)(e)}
              className={applySelectedClass(index as number)}
            >
              <ItemCard
                item={item as JsonType}
                renderer={renderer}
                isSelected={isSelectedItem(index as number)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
