import React, { Component } from "react";
import "./index.scss";
export class TextBox extends Component {
  state = {
    isFoucs: false
  };
  render() {
    const { isFoucs } = this.state;
    const { right } = this.props;
    return (
      <div
        className={isFoucs ? "input-container is-focused" : "input-container"}
      >
        {right ? (
          <div className="input-right">{right}</div>
        ) : (
          <div className="input-right" />
        )}
        <div className="input-left">
          <input onFocus={this.onFocus} onBlur={this.onBlur} {...this.props} />
        </div>
      </div>
    );
  }
  onFocus = () => {
    this.setState({ isFoucs: true });
  };
  onBlur = () => {
    this.setState({ isFoucs: false });
  };
}

export default TextBox;
