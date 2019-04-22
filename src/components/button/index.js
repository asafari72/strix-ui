import React, { Component } from "react";
import "./index.scss";
export class Button extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <div className="button-container">
        {right ? <div>Right</div> : ""}
        <div>
          <button>{...this.props}</button>
        </div>
        {left ? <div>Left</div> : ""}
      </div>
    );
  }
}

export default Button;
