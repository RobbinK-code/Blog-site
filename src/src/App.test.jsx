import React from "react";
import { render, screen } from '@testing-library/react';
import { test, expect } from "vitest";
import "@testing-library/jest-dom/vitest"; 

import App from "./components/App";
test("renders the blog title", () => {
  render(<App />);

  const titleElement = screen.getByText(/Overreacted/i);
  expect(titleElement).toBeInTheDocument();
});