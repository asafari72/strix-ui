import React, { Component } from "react";
import "./index.scss";
export class TextBox extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <div className="input-container">
        {right ? <div>{right}</div> : ""}
        <div>
          <input {...this.props} />
        </div>
        {left ? <div>{left}</div> : ""}
      </div>
    );
  }
}

export default TextBox;
