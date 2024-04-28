/* eslint-disable */
// Seems like playwright rule and jest rule confliting until find better solution, test file should disable eslint entirely.

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TestComp from "components/TestComp";

describe("TestComp", () => {
  it("renders properly", () => {
    render(<TestComp />);
    const plus = screen.getByText("+");
    const minus = screen.getByText("-");
    const zeroes = screen.getAllByText("0");
    expect(plus).toBeVisible();
    expect(minus).toBeVisible();
    expect(zeroes.length).toBeGreaterThanOrEqual(3);
  });
});
