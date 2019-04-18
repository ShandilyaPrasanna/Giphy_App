import getGIFReducer from "../../../modules/reducers/getGIFReducer";

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

const resultObject = {
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
const state = {
  loading: true,
  images: [],
  pagination: {}
};

describe("Check reducers Functionality", () => {
  const action = {
    type: "GET_GIFIMAGES",
    payload: { data: data, pagination: {} }
  };
  it("Test for reducer type GET_GIFIMAGES function ", () => {
    expect(getGIFReducer(state, action)).toMatchObject(resultObject);
  });

  it("Test for reducer type IS_LOADING function ", () => {
    const action = {
      type: "IS_LOADING",
      payload: true
    };
    const defaultAction = { type: "default" };
    expect(getGIFReducer(state, action)).toMatchObject({});
    expect(getGIFReducer(state, defaultAction)).toMatchObject(state);
  });
});
