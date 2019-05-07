import React from "react";
import "./index.scss";

export class Notify extends React.Component {
  static show(title, message, icon, type = "primary", timeOut = 0) {
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
      notifyContainer.appendChild(header);
      let _icon = document.createElement("i");
      _icon.className = icon;
      header.textContent = title;

      header.appendChild(_icon);
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

      let width = 100;
      let timer = setInterval(() => {
        if (width === 0) {
          document
            .getElementById("notify-wrapper")
            .removeChild(notifyContainer);
          clearInterval(timer);
        }
        progress.style.width = --width + "%"
      }, timeOut / 100);
    }
    else {
      notifyContainer.addEventListener("click", () => {
        document
          .getElementById("notify-wrapper")
          .removeChild(notifyContainer);
      })
    }
  }
  static info(title, message, timeOut) {
    let type = "primary";
    let icon = "fas fa-info"
    this.show(title, message, icon, type, timeOut);
  }
  static success(title, message, timeOut) {
    let type = "success";
    let icon = "fas fa-check-circle"
    this.show(title, message, icon, type, timeOut);
  }
  static warning(title, message, timeOut) {
    let type = "warning";
    let icon = "fas fa-exclamation-triangle"
    this.show(title, message, icon, type, timeOut);
  }
  static error(title, message, timeOut) {
    let type = "danger";
    let icon = "fas fa-exclamation-circle"
    this.show(title, message, icon, type, timeOut);
  }
}

export default Notify;
