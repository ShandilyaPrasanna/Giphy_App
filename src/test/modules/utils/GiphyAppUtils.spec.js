import GiphyAppUtils from "../../../modules/utils/GiphyAppUtils";

const data = [
  {
    id: "7lD9Gz5FxpRCg",
    trending_datetime: "1970-01-01 00:00:00",
    images: {
      downsized: {
        url: "https://media2.giphy.com/media/7lD9Gz5FxpRCg/giphy-downsized.gif",
        width: "500",
        height: "237",
        size: "1990441"
      }
    }
  },
  {
    id: "7lD9Gz5FxpRCg",
    images: {
      downsized: {
        url: "https://media2.giphy.com/media/7lD9Gz5FxpRCg/giphy-downsized.gif",
        width: "500",
        height: "237",
        size: "1990441"
      }
    }
  }
];

describe("Check Utils Functionality", () => {
  it("check getMapped Data Function ", () => {
    expect(GiphyAppUtils.getMappedData(data)[0]._id).toEqual("7lD9Gz5FxpRCg");
  });
});
