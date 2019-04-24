import React, { Component } from "react";
import "./index.scss";
const Notify = (
  { title, message, type = "primary", closeable = false, show = false },
  props
) => {
  return show ? (
    <div className={"notify-container bk-" + type}>
      {title ? <header>{title}</header> : ""}
      {message}
    </div>
  ) : (
    ""
  );
};
export { Notify };
