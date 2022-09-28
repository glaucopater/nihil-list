import { Key, SyntheticEvent, useContext } from "react";
import { ListProps } from "./List.types";
import "./List.style.css";
import UserContext, { ContextProps } from "../../contexts/UserContext";

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
    return isSelectedItem(index) ? "selected" : "default";
  };

  const isSelectedItem = (index: number) => {
    return store && (store as number[]).includes(index as number);
  };

  const applyRenderer = (item: any) => {
    const attributes = renderer && renderer();

    if (attributes) {
      // sanitize output
      return attributes.map((attr, index) => (
        <span key={index} className="field">
          {item[attr] ?? `field ${attr} found`}
        </span>
      ));
    }
  };

  return (
    <ul className="list">
      <li></li>
      <li>Info</li>
      {data?.map((item: T, index: Key | null | undefined) => {
        return (
          <li
            key={index}
            onClick={(e) => handleOnClick(index)(e)}
            className={applySelectedClass(index as number)}
          >
            {isSelectedItem(index as number) && (
              <div key={index} className="adornment">
                x
              </div>
            )}
            <div>{applyRenderer(item)}</div>
          </li>
        );
      })}
    </ul>
  );
};
