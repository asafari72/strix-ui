import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NotifyComponent } from "./index";
export class Notify extends Component {
  static show(title, type, message, closeable) {
    let notify = React.createElement(NotifyComponent, {
      title,
      type,
      message,
      closeable
    });

    console.log("notify", ReactDOM.findDOMNode(0));
    ReactDOM.render(notify, document.getElementById("root"));
  }
}

export default Notify;
