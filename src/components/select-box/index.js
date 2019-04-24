import React, { Component } from "react";
import { IconBadge } from "../icon-badge";
import Select from "react-select";
import "./index.scss";

const customStyles = {
  control: (provided, state) => (
    console.log("state", state),
    {
      ...provided,
      border: "none",
      boxShadow: "none"
    }
  ),
  input: (provided, state) => ({
    ...provided,
    border: "none"
  })
};
export class SelectBox extends Component {
  state = {
    isFoucs: false
  };
  render() {
    const { icon } = this.props;
    const { isFoucs } = this.state;
    return (
      <div
        className={isFoucs ? "select-container is-focused" : "select-container"}
      >
        <IconBadge>
          <i className={"fas fa-" + icon} />
        </IconBadge>
        <Select
          placeholder="انتخاب کنید ..."
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          styles={customStyles}
          isRtl={true}
          className="select-box"
          {...this.props}
        />
      </div>
    );
  }
  onFocus = () => {
    this.setState({ isFoucs: true });
  };
  onBlur = () => {
    this.setState({ isFoucs: false });
  };
}

export default SelectBox;
