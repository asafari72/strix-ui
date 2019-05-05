import React from "react";
import "./index.scss";

export class Notify extends React.Component {
  static show(title, message, type = "primary", timeOut = 0) {
    console.log("title", title);
    console.log("type", type);
    console.log("message", message);
    console.log("timeOut", timeOut);

    let notifyWrapper = document.createElement("div");
    notifyWrapper.id = "notify-wrapper";

    let notifyContainer = document.createElement("div");
    notifyContainer.className = "notify-container";

    // add header

    if (title !== null) {
      let header = document.createElement("header");
      header.className = "bk-" + type + "-dark";
      header.textContent = title;
      notifyContainer.appendChild(header);
    } else {
      notifyContainer.className = "notify-container rounded";
    }

    if (message !== null && message !== undefined) {
      // add message
      let messageContainer = document.createElement("div");
      messageContainer.className = "notify-message bk-" + type;
      messageContainer.textContent = message;
      notifyContainer.appendChild(messageContainer);
    }

    notifyWrapper.appendChild(notifyContainer);

    if (document.getElementById("notify-wrapper")) {
      document.getElementById("notify-wrapper").appendChild(notifyContainer);
    } else {
      document.getElementById("root").appendChild(notifyWrapper);
    }

    if (timeOut > 0) {
      let progress = document.createElement("div");
      progress.className = "notify-progress";
      notifyContainer.appendChild(progress);
      progress.style.width = 100;
      let timer = setInterval(() => {
        if (progress.style.width === 0) {
          document
            .getElementById("notify-wrapper")
            .removeChild(notifyContainer);
          clearInterval(timer);
        }
        console.log("progress.style.width");
        --progress.style.width;
      }, timeOut / 100);
    }
  }
  static info(title, message, timeOut) {
    let type = "primary";
    this.show(title, message, type, timeOut);
  }
  static success(title, message, timeOut) {
    let type = "success";
    this.show(title, message, type, timeOut);
  }
  static warning(title, message, timeOut) {
    let type = "warning";
    this.show(title, message, type, timeOut);
  }
  static error(title, message, timeOut) {
    let type = "danger";
    this.show(title, message, type, timeOut);
  }
}

export default Notify;
