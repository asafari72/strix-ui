import React, { Component } from "react";
import { IconBadge } from "../icon-badge";
import "./index.scss";

export class List extends Component {
  render() {
    const { data, icon } = this.props;
    console.log("data: ", this.props.data);
    return (
      <ul>
        {data.map(item => {
          return (
            <li>
              {icon ? (
                <IconBadge size="small">
                  <i className={"fab fa-" + item.icon} />
                </IconBadge>
              ) : (
                ""
              )}
              <h4>{item.text}</h4>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
