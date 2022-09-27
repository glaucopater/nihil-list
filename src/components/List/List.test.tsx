import { render, screen } from "@testing-library/react";
import { List } from "./";

test("renders an empty List", () => {
  render(<List data={[]} />);
  const listComponent = screen.getByRole("list");
  expect(listComponent).toBeInTheDocument();
});
