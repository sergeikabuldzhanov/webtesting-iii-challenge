// Test away!
//Import tested component
import Controls from "./Controls";
//Import dependencies
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//Set up cleanup in afterEach
afterEach(rtl.cleanup);

//Set up repetitive stuff in beforeEach
let wrapper;
let LockGate = () =>{
    return wrapper.queryByText('Lock Gate');
}
let CloseGate = () =>{
    return wrapper.queryByText('Close Gate');
}
let OpenGate = () =>{
    return wrapper.queryByText('Open Gate');
}
let UnlockGate = () =>{
    return wrapper.queryByText('Unlock Gate');
}

describe("Controls component on initial render", () => {
    wrapper = rtl.render(<Controls />);
    it("Matches the snapshot", () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  it("Buttons are rendered, lock button is disabled", () => {
    wrapper = rtl.render(<Controls />);
    expect(LockGate()).toBeVisible();
    expect(LockGate()).toBeDisabled();
    expect(CloseGate()).toBeVisible();
  });

  it("Buttons are rendered, gates open lock button is enabled", () => {
    wrapper = rtl.render(<Controls closed={true} locked={false}/>);
    expect(LockGate()).toBeVisible();
    expect(LockGate()).not.toBeDisabled();
    expect(OpenGate()).toBeVisible();
  });

  it("Buttons are rendered, gates open and closed unlock button is enabled, open button is disabled", () => {
    wrapper = rtl.render(<Controls closed={true} locked={true}/>);
    expect(UnlockGate()).toBeVisible();
    expect(UnlockGate()).not.toBeDisabled();
    expect(OpenGate()).toBeVisible();
    expect(OpenGate()).toBeDisabled();
  });
});
