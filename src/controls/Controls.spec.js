// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

test("Renders correctly", () => {
  render(<Controls />);
});

test("Provides buttons to toggle CLOSED and LOCKED states", () => {
  const { getByText } = render(<Controls />);
  getByText(/close gate/i);

  getByText(/lock gate/i);
});

// test("Buttons text changes to reflect state of door", () => {
//   const { getByText } = render(<Controls />);
//   const close = getByText(/close gate/i);
//   //const open = getByText(/open gate/i);
//   // const unlock = getByText(/unlock gate/i);
//   const lock = getByText(/lock gate/i);

//   fireEvent.click(close);
//   expect(close);

//   fireEvent.click(lock);
//   expect(unlock);
// });

test("Closed toggle button is disabled if gate is LOCKED", () => {
  const { getByText } = render(<Controls locked={true} closed={true} />);
  const closeButton = getByText(/open gate/i);
  fireEvent.click(closeButton);
  expect(closeButton.disabled).toBeTruthy();
});

test("Locked toggle button is disabled if gate is open", () => {
  const { getByText } = render(<Controls closed={false} />);
  const lockButton = getByText(/lock gate/i);
  fireEvent.click(lockButton);
  expect(lockButton.disabled).toBeTruthy();
});
