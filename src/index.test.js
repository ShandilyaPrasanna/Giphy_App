import React from "react";
import ReactDOM from "react-dom";
import index from "./index";

jest.mock("react-dom");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<index />, div);
  ReactDOM.unmountComponentAtNode(div);
});
