import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NotifyComponent } from "./index";
import { type } from "os";
export class Notify extends Component {
  static show(title, message, type = "primary", timeOut = false) {
    console.log(title);
    console.log(type);
    console.log(message);
    console.log(timeOut);

    let notifyWrapper = document.createElement("div");
    notifyWrapper.id = "notify-wrapper";

    let notifyContainer = document.createElement("div");

    if (title !== null) {
      notifyContainer.className = "notify-container";
      let header = document.createElement("header");
      header.className = "bk-" + type + "-dark";
      header.textContent = title;
      notifyContainer.appendChild(header);

      let messageContainer = document.createElement("div");
      messageContainer.className = "notify-message bk-" + type;
      messageContainer.textContent = message;
      notifyContainer.appendChild(messageContainer);
    } else {
      notifyContainer.className = "notify-container rounded";
    }
    notifyWrapper.appendChild(notifyContainer);

    if (document.getElementById("notify-wrapper")) {
      document.getElementById("notify-wrapper").appendChild(notifyContainer);
    } else {
      document.getElementById("root").appendChild(notifyWrapper);
    }

    if (timeOut === true) {
      // let closeIcon = document.createElement("i");
      // closeIcon.className = "fas fa-times";
      setTimeout(() => {
        document.getElementById("notify-wrapper").removeChild(notifyContainer);
      }, 1000);
    }
    // setTimeout(() => {
    //   document.getElementById("root").removeChild(notifyContainer);
    // }, 1000);
  }
  static error(title, message, timeOut) {
    let type = "danger";
    this.show(title, message, type, timeOut);
  }
}

export default Notify;
