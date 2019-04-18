import React, { Component } from "react";
import { connect } from "react-redux";
import GIFPlayerComponent from "./GIFPlayerComponent";
import { getGIFSByKeywordAction, getTrendingGIFS, isLoading } from "../actions";

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25,
      openGIFsPlayer: false,
      GIFToPlay: {}
    };
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  handleScroll = () => {
    const { count } = this.state;
    const {
      getTrendingGIFS,
      getGIFSByKeywordAction,
      searchText,
      isLoading,
      loading
    } = this.props;
    const totalCount =
      this.props.data &&
      this.props.data.pagination &&
      this.props.data.pagination.total_count;

    if (loading && totalCount <= count) return;
    var lastLi = document.querySelector(".Grid > .imageDiv:last-child");
    var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    var pageOffset = window.pageYOffset + window.innerHeight;
    var bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) {
      this.setState({ count: count + 10 }, () => {
        searchText === ""
          ? getTrendingGIFS(this.state.count)
          : getGIFSByKeywordAction(searchText, this.state.count);
        isLoading(true);
      });
    }
  };

  closePlayer = () => {
    this.setState({ openGIFsPlayer: false, GIFToPlay: "" });
  };

  showGIFPlayer = url => {
    this.setState({ openGIFsPlayer: true, GIFToPlay: url });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.openGIFsPlayer && (
          <GIFPlayerComponent
            GIFToPlay={this.state.GIFToPlay}
            closePlayer={this.closePlayer}
          />
        )}
        <div className="Grid">
          {this.props.data &&
            this.props.data.images &&
            this.props.data.images.map((ele, index) => {
              return (
                <div
                  key={ele._id}
                  className="imageDiv"
                  onClick={() => {
                    this.showGIFPlayer(ele.images.original.mp4);
                  }}
                >
                  <img
                    key={ele._id}
                    className="imageTag"
                    src={ele.images.original_still.url}
                    alt="Loading"
                  />
                </div>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}

export function mapStateToProps(state) {
  return {
    data: state.app,
    loading: state.app.loading
  };
}

export default connect(
  mapStateToProps,
  { getGIFSByKeywordAction, getTrendingGIFS, isLoading }
)(Grid);
