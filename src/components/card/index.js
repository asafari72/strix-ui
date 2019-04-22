import React, { Component } from "react";
import "./index.scss";

export class Card extends Component {
  render() {
    const { header, title, footer, icon } = this.props;
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
        <div className="card-body">{this.props.children}</div>
        {footer ? <div className="card-footer">Footer</div> : ""}
      </div>
    );
  }
}

export default Card;
