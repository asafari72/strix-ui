import React from "react";
import "./index.scss";

export class NotifyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { title, type, message, closeable } = this.props;
    return (
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
                  console.log("show", show);
                  show = false;
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
    );
  }
}
NotifyComponent.defaultProps = {
  type: "primary"
};

export default NotifyComponent;
