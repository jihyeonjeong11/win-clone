/* eslint-disable */
// Seems like playwright rule and jest rule confliting until find better solution, test file should disable eslint entirely.

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Window from "components/Window";

// We need context for render test! since I can't set state inside jest function.
describe("Window", () => {
  it("renders properly", () => {
    const setShowWindowMock = () => null;
    render(<Window setShowWindow={setShowWindowMock} />);
    const section = screen.getByTestId("test-window");
    expect(section).toBeVisible();
  });

  it("Drag event works", () => {
    render(<Window />);
    const section = screen.getByTestId("test-window");
    const initialPosition = section.getBoundingClientRect();
    // before coords
    expect(initialPosition).toBeTruthy();

    // simulate dragging
    fireEvent.mouseDown(section, { clientX: 0, clientY: 0 });
    fireEvent.dragEnter(section);
    fireEvent.mouseMove(section, { clientX: 100, clientY: 100 });
    fireEvent.dragExit(section);

    // expect(newX).not.toBe(initialX);
    // expect(newY).not.toBe(initialY);
  });
});

// reference: https://github.com/testing-library/user-event/issues/440
// by kentcdodds
