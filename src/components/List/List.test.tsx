import { render, screen } from "@testing-library/react";
import { List } from "./";
import { dataset1, dataset2 } from "./List.fixtures";

describe("List", () => {
  test("renders an empty List", () => {
    render(<List data={[]} renderer={() => []} />);
    const listComponent = screen.getByRole("list");
    expect(listComponent).toBeInTheDocument();
  });

  test("renders a List with a dataset", () => {
    render(<List data={dataset1} renderer={() => []} />);
    const listComponent = screen.getByRole("list");
    expect(listComponent).toBeInTheDocument();
  });

  test("renders a List with a different dataset", () => {
    render(<List data={dataset2} renderer={() => []} />);
    const listComponent = screen.getByRole("list");
    expect(listComponent).toBeInTheDocument();
  });
});
