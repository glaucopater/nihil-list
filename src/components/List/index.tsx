import { ListProps } from "./List.types";

export const List = ({ data }: ListProps) => {
  return (
    <ul>
      {data?.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};
