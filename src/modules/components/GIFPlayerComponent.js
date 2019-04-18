import React, { Component } from "react";
import ReactDOM from "react-dom";

export class GIFPlayerComponent extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="popover">
        <div className="blurBackground" />
        <div id="player" className="player">
          <div id="closePlayer" onClick={this.props.closePlayer}>
            X
          </div>
          <video width="100%" height="100%" controls autoplay loop muted>
            <source src={this.props.GIFToPlay} type="video/mp4" />
          </video>
        </div>
      </div>,

      document.getElementById("GIFPlayer")
    );
  }
}

export default GIFPlayerComponent;
