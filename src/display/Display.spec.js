// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Display from "./Display";

test("Default is lunlocked and open", () => {
  const { queryByText } = render(<Display />);
  expect(queryByText(/open/i)).toBeTruthy();
  expect(queryByText(/unlocked/i)).toBeTruthy();
});

test("Gate is OPEN and UNLOCKED", () => {
  const { queryByText } = render(<Display closed={false} locked={false} />);
  expect(queryByText(/closed/i)).toBeFalsy();
  expect(queryByText(/unlocked/i)).toBeTruthy();
});

test("Displays Closed if closed prop is TRUE", () => {
  const { queryByText } = render(<Display closed={true} locked={false} />);
  expect(queryByText(/closed/i)).toBeTruthy();
});

test("Displays Open if closed prop is FALSE", () => {
  const { queryByText } = render(<Display closed={false} locked={false} />);
  expect(queryByText(/open/i)).toBeTruthy();
});

test("Displays Locked when locked prop is TRUE", () => {
  const { queryByText } = render(<Display locked={true} />);
  expect(queryByText(/locked/i)).toBeTruthy();
});

test("Displays Unocked when locked prop is FALSE", () => {
  const { queryByText } = render(<Display locked={false} />);
  expect(queryByText(/unlocked/i)).toBeTruthy();
});

test("When Locked or Closed uses RED-LED class", () => {
  const { getByText } = render(<Display locked={true} closed={true} />);
  const locked = getByText(/locked/i);
  const closed = getByText(/closed/i);
  expect(locked.className).toMatch("red-led");
  expect(closed.className).toMatch("red-led");
});

test("When Unlocked or Open uses GREEN-LED class", () => {
  const { getByText } = render(<Display locked={false} closed={false} />);
  const unlocked = getByText(/unlocked/i);
  const open = getByText(/open/i);
  expect(unlocked.className).toMatch("green-led");
  expect(open.className).toMatch("green-led");
});
