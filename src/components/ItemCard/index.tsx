import React from "react";
import { getAttributeValueFromItem, getWarningMessage } from "../../utils";
import { JsonType } from "../List/List.types";
import "./ItemCard.style.css";

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

  return (
    <div
      className={`item-card${isSelected ? " item-card-selected" : ""}`}
      role="listitem"
    >
      {attributes.map((attr: string, index: number) => (
        <span key={index} className="field">
          {(item as JsonType).hasOwnProperty(attr)
            ? getAttributeValueFromItem(item, attr)
            : getWarningMessage(attr)}
        </span>
      ))}
    </div>
  );
};

export const MemoizedItemCard = React.memo(ItemCard);
