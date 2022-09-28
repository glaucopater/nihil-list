import { HeaderProps } from "./Header.types";
import "./Header.style.css";
import { useContext } from "react";
import UserContext, { ContextProps } from "../../contexts/UserContext";

export const Header = ({ selectedItems }: HeaderProps) => {
  const initialStore = useContext(UserContext);

  const { store: selectedItem } = (initialStore as ContextProps) || {};

  const selectedItemId = selectedItem as unknown as number;

  return (
    <header role="heading" aria-level={1} className={"heading"}>
      <h1>Nihil List</h1>
      {selectedItemId > -1 && <h2>Selected items: {selectedItemId}</h2>}
      <ul>
        {selectedItems?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </header>
  );
};
