import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";

import App from "./components/App";

test("renders blog title", () => {
  render(<App />);

  const title = screen.getByText(/Robbin's Tech Blog/i);

  expect(title).toBeInTheDocument();
});