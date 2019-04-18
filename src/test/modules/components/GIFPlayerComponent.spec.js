import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { GIFPlayerComponent } from "../../../modules/components/GIFPlayerComponent";

jest.mock("react-dom");

const URL = "https://media1.giphy.com/media/aGyZ004XM4MjC/100w.gif";

configure({ adapter: new Adapter() });
describe("GIFPlayerComponent Test", () => {
  let tree;
  const props = {
    GIFToPlay: URL
  };
  beforeEach(() => {
    tree = shallow(<GIFPlayerComponent {...props} />);
  });

  it("renders GIFPlayerComponent ", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
