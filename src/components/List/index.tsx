import { ListProps } from "./List.types";

export const List = ({ data }: ListProps) => {

  console.log(data);
  return (
    <ul>
      {data?.map((item, index) => {
        return <li key={index}>{JSON.stringify(item)}</li>;
      })}
    </ul>
  );
};
