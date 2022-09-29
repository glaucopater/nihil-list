import React from "react";
import { JsonType } from "../List/List.types";
import "./ItemCard.style.css";

const getWarningMessage = (attr: string) => {
  return `Field '${attr}' not found!`;
};

export const ItemCard = ({
  item,
  renderer,
  isSelected,
}: {
  item: JsonType;
  renderer: () => string[];
  isSelected?: boolean;
}) => {
  const attributes: string[] = renderer();

  const getAttributeValue = (item: JsonType, attr: string) => {
    return item[attr] as keyof typeof item;
  };

  return (
    <div
      className={`item-card${isSelected ? " item-card-selected" : ""}`}
      role="listitem"
    >
      {attributes.map((attr: string, index: number) => (
        <span key={index} className="field">
          {(item as JsonType).hasOwnProperty(attr)
            ? getAttributeValue(item, attr)
            : getWarningMessage(attr)}
        </span>
      ))}
    </div>
  );
};

ItemCard.whyDidYouRender = true;

export const MemoizedItemCard = React.memo(ItemCard);
