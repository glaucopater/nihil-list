import { render, screen } from "@testing-library/react";
import { List } from "./";
import { dataset1, dataset2 } from "./List.fixtures";

test("renders an empty List", () => {
  render(<List data={[]} />);
  const listComponent = screen.getByRole("list");
  expect(listComponent).toBeInTheDocument();
});

test("renders a List with a dataset", () => {
  render(<List data={dataset1} />);
  const listComponent = screen.getByRole("list");
  expect(listComponent).toBeInTheDocument();
});

test("renders a List with a different dataset", () => {
  render(<List data={dataset2} />);
  const listComponent = screen.getByRole("list");
  expect(listComponent).toBeInTheDocument();
});
