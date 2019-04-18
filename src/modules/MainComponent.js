import React, { Component } from "react";
import Grid from "./components/Grid";
import { connect } from "react-redux";
import { getGIFSByKeywordAction, getTrendingGIFS, isLoading } from "./actions";

export class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  componentDidMount() {
    this.props.getTrendingGIFS(25);
    this.props.isLoading(true);
  }

  handleOnChange = event => {
    if (event.key === "Enter") {
      this.props.getGIFSByKeywordAction(event.target.value, 25);
      this.props.isLoading(true);
    }
    this.setState({ searchText: event.target.value });
  };

  displayHeader = () => {
    return (
      <div className="logo">
        <img
          src="https://developers.giphy.com/static/img/dev-logo-lg.7404c00322a8.gif"
          width="200px"
        />
      </div>
    );
  };

  displaySearchBar = () => {
    return (
      <div className="wrap">
        <div className="search">
          <input
            id="seachBox"
            type="text"
            className="searchTerm"
            placeholder="Press Enter To Search...."
            onKeyPress={this.handleOnChange}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.loading && <div className="spinner" />}
        {this.displayHeader()}
        {this.displaySearchBar()}
        <Grid searchText={this.state.searchText} />
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    loading: state.app.loading
  };
}

export default connect(
  mapStateToProps,
  {
    getGIFSByKeywordAction,
    getTrendingGIFS,
    isLoading
  }
)(MainComponent);
