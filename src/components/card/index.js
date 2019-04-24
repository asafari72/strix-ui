import React, { Component } from "react";
import { IconBadge } from "../icon-badge";
import "./index.scss";

export class Card extends Component {
  render() {
    const { header, title, footer, icon, footerItems } = this.props;
    return (
      <div className="card-container">
        {header ? (
          <div className="card-header">
            <div className="header-right">
              <IconBadge BackgroundColor="#03a9f4" Color="#ffffff" size="small">
                <i className={"fas fa-" + icon} />
              </IconBadge>
              <p>{title}</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.props.children}
        {footer ? <div className="card-footer">{footerItems}</div> : ""}
      </div>
    );
  }
}

export default Card;
