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
  const attributes: string[] = renderer && item && renderer();

  const getAttributeValue = (item: JsonType, attr: string) => {
    return item[attr] as keyof typeof item;
  };

  return (
    <div
      className={`item-card ${isSelected && "item-card-selected"} `}
      role="listitem"
    >
      {attributes.map((attr: string, index: number) => (
        <span key={index} className="field">
          {((item as Object).hasOwnProperty(attr) &&
            getAttributeValue(item, attr)) ??
            `field ${attr} found`}
        </span>
      ))}
    </div>
  );
};
