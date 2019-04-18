import {
  getGIFSByKeywordAction,
  isLoading,
  getTrendingGIFS
} from "../../../modules/actions";

const response = {
  images: [
    {
      _id: "7lD9Gz5FxpRCg",
      images: {
        downsized: {
          height: "237",
          size: "1990441",
          url:
            "https://media2.giphy.com/media/7lD9Gz5FxpRCg/giphy-downsized.gif",
          width: "500"
        }
      }
    },
    {
      _id: "7lD9Gz5FxpRCg",
      images: {
        downsized: {
          height: "237",
          size: "1990441",
          url:
            "https://media2.giphy.com/media/7lD9Gz5FxpRCg/giphy-downsized.gif",
          width: "500"
        }
      }
    }
  ],
  loading: false,
  pagination: {}
};

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    statusText: "success",
    json: () => {
      return response;
    }
  })
);

describe("Check actions", () => {
  it("Test for action getGIFSByKeywordAction ", () => {
    getGIFSByKeywordAction("apple", 2)();
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject("Something went Wrong"));
    getGIFSByKeywordAction("apple", 2)();
    expect(getGIFSByKeywordAction("apple", 2)).toBeInstanceOf(Function);
  });

  it("Test for action getTrendingGIFS ", () => {
    getTrendingGIFS(2)();
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject("Something went Wrong"));
    getTrendingGIFS(2)();
    expect(getTrendingGIFS(2)).toBeInstanceOf(Function);
  });

  it("Test for action isLoading ", () => {
    expect(isLoading(true)).toMatchObject({
      type: "IS_LOADING",
      payload: true
    });
  });
});
