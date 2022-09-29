import "./Header.style.css";
import { useContext } from "react";
import UserContext, { ContextProps } from "../../contexts/UserContext";

export const Header = () => {
  const initialStore = useContext(UserContext);
  const { store } = (initialStore as ContextProps) || {};
  const selectedItems = store as number[];

  return (
    <header role="heading" aria-level={1} className={"heading"}>
      <h1 className="title">The List</h1>
      <h2 className="info">
        Selected items:{" "}
        {selectedItems?.length > 0 ? selectedItems.join(",") : "none"}
      </h2>
    </header>
  );
};
