import { render, screen } from "@testing-library/react";
import { ItemCard } from ".";
import { dataset1 } from "../List/List.fixtures";

describe("ItemCard", () => {
  test("renders an ItemCard", () => {
    render(<ItemCard item={{}} renderer={() => []} />);
    const component = screen.getByRole("listitem");
    expect(component).toBeInTheDocument();
  });

  test("renders an ItemCard containing data", () => {
    render(<ItemCard item={dataset1[0]} renderer={() => ["title"]} />);
    const component = screen.getByText("Title 1");
    expect(component).toBeInTheDocument();
  });

  test("renders a ItemCard with a wrong renderer", () => {
    render(<ItemCard item={dataset1[0]} renderer={() => ["title 0"]} />);
    const component = screen.getByText("Field 'title 0' not found!");
    expect(component).toBeInTheDocument();
  });
});
