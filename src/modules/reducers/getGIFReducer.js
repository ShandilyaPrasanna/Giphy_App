import GiphyAppUtils from "../utils/GiphyAppUtils";
import { cloneDeep } from "lodash";

const defaultState = {
  loading: false,
  images: [],
  pagination: {}
};

export default function(state = defaultState, action) {
  const newState = cloneDeep(state);
  switch (action.type) {
    case "GET_GIFIMAGES":
      newState.loading = false;
      newState.images = action.payload ? GiphyAppUtils.getMappedData(action.payload.data):[];
      newState.pagination = action.payload ? action.payload.pagination:{};
      return newState;
    case "IS_LOADING":
      newState.loading = action.payload;
      return newState;
    default:
      return state;
  }
}
