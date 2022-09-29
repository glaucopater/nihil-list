import { Key, SyntheticEvent, useContext } from "react";
import { JsonType, ListProps } from "./List.types";
import CustomContext, { ContextProps } from "../../contexts/UserContext";
import { MemoizedItemCard } from "../ItemCard";
import "./List.style.css";

export const List = <T,>({
  data,
  renderer,
}: React.PropsWithChildren<ListProps<T>>) => {
  const initialStore = useContext(CustomContext);

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
              <MemoizedItemCard
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

List.whyDidYouRender = true;
