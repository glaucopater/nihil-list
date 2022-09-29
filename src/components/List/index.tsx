import { SyntheticEvent, useContext } from "react";
import { CustomKey, JsonType, ListProps } from "./List.types";
import CustomContext, { ContextProps } from "../../contexts/CustomContext";
import { MemoizedItemCard } from "../ItemCard";
import { applyCssClassToItem, isSelectedItem } from "../../utils";
import "./List.style.css";

export const List = <T,>({
  data,
  renderer,
}: React.PropsWithChildren<ListProps<T>>) => {
  const initialStore = useContext(CustomContext);

  const { store, updateStore } = (initialStore as ContextProps) || {};

  const handleOnClick = (index: CustomKey) => (_e: SyntheticEvent) => {
    updateStore(index);
  };

  return (
    <>
      <h2>Info</h2>
      <ul className="list">
        {data?.map((item, index: CustomKey) => {
          return (
            <li
              key={index}
              onClick={(e) => handleOnClick(index)(e)}
              className={applyCssClassToItem(
                index as number,
                store as number[],
                "item-selected"
              )}
            >
              <MemoizedItemCard
                item={item as JsonType}
                renderer={renderer}
                isSelected={isSelectedItem(index as number, store as number[])}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
