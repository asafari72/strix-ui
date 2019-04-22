import React, { Component } from "react";
import "./index.scss";
export class Button extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <div className="button-container">
        <button>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
