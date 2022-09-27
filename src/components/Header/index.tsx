import { HeaderProps } from "./Header.types";

export const Header = ({ selectedItems }: HeaderProps) => {
  return (
    <header role="heading" aria-level={1}>
      <h1>Nihil List</h1>
      {selectedItems && <h2>Selected items:</h2>}
      <ul>
        {selectedItems?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </header>
  );
};
