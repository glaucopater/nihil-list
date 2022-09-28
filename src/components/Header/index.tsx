import "./Header.style.css";
import { useContext } from "react";
import UserContext, { ContextProps } from "../../contexts/UserContext";

export const Header = () => {
  const initialStore = useContext(UserContext);
  const { store } = (initialStore as ContextProps) || {};
  const selectedItems = store as number[];

  return (
    <header role="heading" aria-level={1} className={"heading"}>
      <h1>The List</h1>
      {selectedItems?.length > 0 ? (
        <h2>Selected items: {selectedItems.join(",")}</h2>
      ) : (
        <h2> - </h2>
      )}
    </header>
  );
};
