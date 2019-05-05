import React, { Component } from "react";
import "./index.scss";

export class Radio extends Component {
  render() {
    const { name, text } = this.props;
    return (
      <div className="radio-container">
        <input id={name} name={name} type="radio" {...this.props} />
        <label htmlFor={name} className="radio-label">
          {text}
        </label>
      </div>
    );
  }
}
Radio.defaultProps = {
  name: "radio-" + Math.floor(Math.random() * Math.floor(1000))
};
export default Radio;
