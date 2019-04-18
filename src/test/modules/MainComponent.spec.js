import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MainComponent, mapStateToProps } from "../../modules/MainComponent";

const state = {
  app: {
    loading: true,
    images: [],
    pagination: {}
  }
};

configure({ adapter: new Adapter() });
describe("MainComponent Test", () => {
  let tree;
  const props = {
    getGIFSByKeywordAction: jest.fn(),
    getTrendingGIFS: jest.fn(),
    isLoading: jest.fn(),
    loading: true
  };
  beforeEach(() => {
    tree = shallow(<MainComponent {...props} />);
  });

  it("renders MainComponent ", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("check onChange handler ", () => {
    tree.find("#seachBox").simulate("keyPress", { target: { value: "apple" } });
    expect(tree.state("searchText")).toBe("apple");
  });
  it("mapStateToProps", () => {
    expect(mapStateToProps(state).loading).toBe(true);
  });
});
