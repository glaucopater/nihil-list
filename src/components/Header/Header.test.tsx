import { render, screen } from "@testing-library/react";
import { Header } from ".";

test("renders an empty Header", () => {
  render(<Header />);
  const headers = screen.getAllByRole("heading");
  expect(headers).toHaveLength(3);
});
