// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";

test("Renders correctly", () => {
  render(<Dashboard />);
});

test("Cannot be closed or open if it is locked", () => {
  const { queryByText } = render(<Dashboard locked={true} />);
  expect(queryByText(/closed/i)).toBeFalsy();
});
