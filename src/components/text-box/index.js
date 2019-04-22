import React, { Component } from "react";
import "./index.scss";
export class TextBox extends Component {
  state = {
    isFoucs: false
  };
  render() {
    const { isFoucs } = this.state;
    const { left, right } = this.props;
    return (
      <div
        className={isFoucs ? "input-container is-focused" : "input-container"}
      >
        {right ? <div>{right}</div> : <div />}
        <div>
          <input onFocus={this.onFocus} onBlur={this.onBlur} {...this.props} />
        </div>
        {left ? <div>{left}</div> : <div />}
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
