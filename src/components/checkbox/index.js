import React, { Component } from "react";
import "./index.scss";
export class CheckBox extends Component {
  render() {
    const { name, text } = this.props;
    return (
      <div className="checkbox-container">
        <label htmlFor={name} className="checkbox-label">
          {text}
        </label>
        <input id={name} name={name} type="checkbox" {...this.props} />
        <span className="checkmark" />
      </div>
      // <label class="checkbox-container" htmlFor={name}>
      //   {text}
      //   <input type="checkbox" id={name}>
      //     <span class="checkmark"></span>
      // </label>
    );
  }
}
CheckBox.defaultProps = {
  name: "checkbox-" + Math.floor(Math.random() * Math.floor(1000))
};
export default CheckBox;
