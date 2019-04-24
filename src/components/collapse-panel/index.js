import React, { Component } from "react";
import { IconBadge } from "../icon-badge";
import "./index.scss";
export class Collapse extends Component {
  state = {
    isShow: true
  };
  render() {
    const { title, icon } = this.props;
    return (
      <div className="collapse-container">
        <header
          onClick={() => {
            this.setState({ isShow: !this.state.isShow });
          }}
        >
          <IconBadge size="small">
            <i className={"fas fa-" + icon} />
          </IconBadge>
          <p>{title}</p>
        </header>
        {this.state.isShow ? <article>{this.props.children}</article> : ""}
      </div>
    );
  }
}

export default Collapse;
