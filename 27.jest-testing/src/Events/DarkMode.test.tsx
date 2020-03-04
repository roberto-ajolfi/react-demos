import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DarkMode from "./DarkMode";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test("renders with or without a name", () => {
    const onChange = jest.fn();

    act(() => {
        render(<DarkMode onChange={onChange} />, container);
    });

    const button = document.querySelector("[data-testid=darkmode]");
    expect(button.innerHTML).toBe("DarkMode on");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("DarkMode off");
});