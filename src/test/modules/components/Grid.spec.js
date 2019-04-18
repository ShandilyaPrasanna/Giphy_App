import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Grid, mapStateToProps } from "../../../modules/components/Grid";

document.querySelector = jest.fn().mockImplementation(() => {
  return { offsetTop: 10, clientHeight: 100 };
});
const data = [
  {
    id: "7lD9Gz5FxpRCg",
    images: {
      fixed_height: {
        url:
          "https://media2.giphy.com/media/7lD9Gz5FxpRCg/giphy-fixed_height.gif",
        width: "500",
        height: "237",
        size: "1990441"
      },
      original_still: {
        url:
          "https://media2.giphy.com/media/7lD9Gz5FxpRCg/giphy-fixed_height.gif",
        width: "500",
        height: "237",
        size: "1990441"
      },
      original: {
        url:
          "https://media2.giphy.com/media/7lD9Gz5FxpRCg/giphy-fixed_height.gif",
        width: "500",
        height: "237",
        size: "1990441"
      }
    }
  }
];
const URL = "https://media1.giphy.com/media/aGyZ004XM4MjC/100w.gif";
const window = { pageYOffset: 20, innerHeight: 200 };

configure({ adapter: new Adapter() });
describe("Grid Test", () => {
  let tree;
  const props = {
    getGIFSByKeywordAction: jest.fn(),
    getTrendingGIFS: jest.fn(),
    isLoading: jest.fn(),
    data: { images: data, pagination: { total_count: 100 }, loading: false },
    loading: false
  };
  beforeEach(() => {
    tree = shallow(<Grid {...props} />);
  });

  it("renders Grid ", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("onCLick should open popover with GIF ", () => {
    tree.find(".imageDiv").simulate("click", URL);
    expect(tree.state("openGIFsPlayer")).toBe(true);
  });

  it("test closePlayer callcack ", () => {
    tree.instance().closePlayer();
    expect(tree.state("openGIFsPlayer")).toBe(false);
  });

  it("test mapStateToProps ", () => {
    const state = {
      app: {
        loading: true,
        images: [],
        pagination: {}
      }
    };

    expect(mapStateToProps(state).loading).toBe(true);
  });

  it("test handleScroll function ", () => {
    tree.setProps({ loading: true });
    tree.setState({ count: 25 });
    tree.instance().handleScroll();
    expect(tree.state("count")).toBe(35);
  });
});
