import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import MainComponent from "./modules/MainComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div id="GIFPlayer" />
          <MainComponent />
        </Provider>
      </div>
    );
  }
}

export default App;
