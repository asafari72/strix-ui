import React, { Component } from "react";
import "./index.scss";
export class Button extends Component {
  state = {
    type: "primary",
    size: "normal"
  };
  componentDidMount() {
    switch (this.props.type) {
      case "success":
        this.setState({ type: "success" });
        break;
      case "warning":
        this.setState({ type: "warning" });
        break;
      case "danger":
        this.setState({ type: "danger" });
        break;
      case "primary-outline":
        this.setState({ type: "primary-outline" });
        break;
      case "success-outline":
        this.setState({ type: "success-outline" });
        break;
      case "warning-outline":
        this.setState({ type: "warning-outline" });
        break;
      case "danger-outline":
        this.setState({ type: "danger-outline" });
        break;
      default:
        this.setState({ type: "primary" });
        break;
    }
    switch (this.props.size) {
      case "small":
        this.setState({ size: "small" });
        break;
      case "big":
        this.setState({ size: "big" });
        break;
      default:
        this.setState({ size: "normal" });
        break;
    }
  }
  render() {
    console.log(this.state);
    const { icon, name, loading } = this.props;
    const { type, size } = this.state;
    return (
      <div className={"button-container " + "btn-" + type + " btn-" + size}>
        {icon ? (
          <div className="button-right">
            <i className={"fas fa-" + icon} />
          </div>
        ) : (
          ""
        )}
        <button {...this.props} disabled={loading}>
          {" "}
          {loading ? <i className="fas fa-circle-notch fa-spin fa-lg	" /> : name}
        </button>
      </div>
    );
  }
}

export default Button;
