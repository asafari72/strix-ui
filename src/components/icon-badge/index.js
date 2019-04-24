import React, { Component } from "react";
import "./index.scss";

export class IconBadge extends Component {
  state = {
    size: "normal"
  };
  componentDidMount() {
    switch (this.props.size) {
      case "small":
        this.setState({ size: "small" });
        break;
      default:
        this.setState({ size: "normal" });
        break;
    }
  }
  render() {
    const { size } = this.state;
    const { BackgroundColor, Color } = this.props;
    return (
      <div
        className={"icon-badge-container badge-" + size}
        style={{ backgroundColor: BackgroundColor, color: Color }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default IconBadge;
