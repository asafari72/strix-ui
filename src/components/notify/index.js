import React from "react";
import "./index.scss";

const Notify = React.memo(function Notify(
  { title, message, type = "primary", closeable = false, show = false },
  props
) {
  return show ? (
    <div
      id="notify-container"
      className={title ? "notify-container" : "notify-container rounded"}
    >
      {title ? (
        <header className={"bk-" + type}>
          {title}
          {closeable ? (
            <i
              className="fas fa-times"
              onClick={() => {
                show = false;
                console.log("show");
              }}
            />
          ) : (
            ""
          )}
        </header>
      ) : (
        ""
      )}
      <span className={!title ? "bk-" + type : ""}>{message}</span>
    </div>
  ) : (
    ""
  );
});
export { Notify };
