import React from 'react';
import { render, screen } from '@testing-library/react';
import {expect, test} from 'vitest';
import '@testing-library/react';
import App from "./components/App";

test("renders blog title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Overreacted/i);
  expect(titleElement).toBeInTheDocument();
});