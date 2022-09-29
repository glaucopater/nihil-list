import { dataset2 } from "../components/List/List.fixtures";
import { JsonType } from "../components/List/List.types";
import { getAttributeValueFromItem, isSelectedItem } from "./";

describe("Utils", () => {
  test("getAttributeValueFromItem", () => {
    const result = getAttributeValueFromItem(dataset2[0] as JsonType, "name");
    expect(result).toBe("Name 1");
  });

  test("isSelectedItem", () => {
    const result = isSelectedItem(1, [1, 2, 3]);
    expect(result).toBe(true);
  });
});
