const apiKey = "hi3KViyvIjSvHnq3kCrP1kW4iv1SHGjP";
const domain = "http://api.giphy.com/v1/gifs";
const GET_GIFIMAGES = "GET_GIFIMAGES";
const IS_LOADING = "IS_LOADING";

export function getGIFSByKeywordAction(keyword, limit) {
  return function(dispatch) {
    fetch(`${domain}/search?q=${keyword}&api_key=${apiKey}&limit=${limit}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(
        response => {
          if (response.status === 200) {
            return response.json();
          }
        },
        error => {
          console.error("Something went wrong", error);
          dispatch(isLoading(false));
        }
      )
      .then(
        res => {
          dispatch({ type: GET_GIFIMAGES, payload: res });
        },
        error => {
          console.error("Something went wrong", error);
          dispatch(isLoading(false));
        }
      );
  };
}

export function isLoading(bool) {
  return { type: IS_LOADING, payload: bool };
}

export function getTrendingGIFS(limit) {
  return function(dispatch) {
    fetch(`${domain}/trending?api_key=${apiKey}&limit=${limit}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(
        response => {
          if (response.status === 200) {
            return response.json();
          }
        },
        error => {
          console.error("Something went wrong", error);
          dispatch(isLoading(false));
        }
      )
      .then(
        res => {
          dispatch({ type: GET_GIFIMAGES, payload: res });
        },
        error => {
          console.error("Something went wrong", error);
          dispatch(isLoading(false));
        }
      );
  };
}
