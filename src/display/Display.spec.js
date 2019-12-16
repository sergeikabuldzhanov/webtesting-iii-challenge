// Test away!
//Import tested component
import Display from "./Display";
//Import dependencies
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//Set up cleanup in afterEach
afterEach(rtl.cleanup);

//Set up repetitive stuff in beforeEach
let wrapper;

let Closed = () => {
  return wrapper.queryByText("Closed");
};
let Locked = () => {
  return wrapper.queryByText("Locked");
};
let Unlocked = () => {
  return wrapper.queryByText("Unlocked");
};
let Open = () => {
  return wrapper.queryByText("Open");
};

describe("Display component", () => {
  it("Matches the snapshot", () => {
    wrapper = rtl.render(<Display />);
    expect(wrapper.container).toMatchSnapshot();
  });

  it("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
    wrapper = rtl.render(<Display />);
    expect(Open()).toBeVisible();
    wrapper = rtl.render(<Display closed={true}/>);
    expect(Closed()).toBeVisible();
});

  it("displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise", () => {
    wrapper = rtl.render(<Display />);
    expect(Unlocked()).toBeVisible();
    wrapper = rtl.render(<Display locked={true}/>);
    expect(Locked()).toBeVisible();
});

  it("when closed uses the red-led class", () => {
    wrapper = rtl.render(<Display closed={true}/>);
    expect(Closed()).toHaveClass('red-led');
});

  it("when locked uses the red-led class", () => {
    wrapper = rtl.render(<Display locked={true}/>);
    expect(Locked()).toHaveClass('red-led');
});

  it("when unlocked or open use the green-led class", () => {
    wrapper = rtl.render(<Display />);
    expect(Open()).toHaveClass('green-led');
    expect(Unlocked()).toHaveClass('green-led');
});
});
