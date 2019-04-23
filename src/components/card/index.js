import React, { Component } from "react";
import "./index.scss";

export class Card extends Component {
  render() {
    const { header, title, footer, icon, footerItems } = this.props;
    return (
      <div className="card-container">
        {header ? (
          <div className="card-header">
            <div className="header-right">
              <i className={"fas fa-" + icon} />
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
