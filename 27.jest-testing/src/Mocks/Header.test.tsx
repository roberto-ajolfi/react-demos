import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "./Header";

jest.mock("./Header", () => {
    return function MockHeader(props: {name: string}) {
        return ( <h1 data-testid='hdr'>Hello, {props.name} from the MOCK!</h1> );
    };
});

let container: HTMLDivElement = null;
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

it("renders header data from mock", async () => {
    act(() => {
        render(
            <Header
                name="Roberto"
            />,
            container
        );
    });

    expect(
        container.querySelector("[data-testid='hdr']").textContent
    ).toEqual("Hello, Roberto from the MOCK!");
});