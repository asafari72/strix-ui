import React, { Component } from "react";
import "./index.scss";
export class CheckBox extends Component {
  render() {
    const { name, text } = this.props;
    return (
      <div className="checkbox-container">
        <input id={name} name={name} type="checkbox" {...this.props} />
        <div className="checkmark" />
        <label htmlFor={name} className="checkbox-label">
          {text}
          <span />
        </label>
      </div>
    );
  }
}
CheckBox.defaultProps = {
  name: "checkbox-" + Math.floor(Math.random() * Math.floor(1000))
};
export default CheckBox;
