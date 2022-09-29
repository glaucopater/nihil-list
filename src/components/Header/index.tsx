import { useContext } from "react";
import CustomContext, { ContextProps } from "../../contexts/UserContext";
import "./Header.style.css";

export const Header = () => {
  const initialStore = useContext(CustomContext);
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
