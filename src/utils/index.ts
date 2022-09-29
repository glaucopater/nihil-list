import { JsonType } from "../components/List/List.types";

export const getAttributeValueFromItem = (item: JsonType, attr: string) =>
  item[attr] as keyof typeof item;

export const getWarningMessage = (attr: string) => {
  return `Field '${attr}' not found!`;
};

export const isSelectedItem = (index: number, store: number[]) => {
  return store && (store as number[]).includes(index as number);
};

export const applyCssClassToItem = (
  index: number,
  store: number[],
  cssClass: string
) => {
  return isSelectedItem(index, store as number[]) ? cssClass : "default";
};
