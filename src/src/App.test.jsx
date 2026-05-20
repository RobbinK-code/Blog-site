import { render, screen } from '@testing-library/react';
import { test, expect } from "vitest";
import "@testing-library/jest-dom";

import App from "./components/App";

test("renders blog title", () => {
  render(<App />);

  const titleElement = screen.getByText(/Overreacted/i);
  expect(titleElement).toBeInTheDocument();
});