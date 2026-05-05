import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog title", () => {
  render(<App />);

  const title = screen.getByText(/Robbin's Tech Blog/i);

  expect(title).toBeInTheDocument();
});