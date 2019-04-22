import React, { Component } from "react";
import { IconBadge } from "../icon-badge";
import Select from "react-select";
import "./index.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
const customStyles = {
  control: (provided, state) => (
    console.log("state", state),
    {
      ...provided,
      border: "none"
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
          options={options}
          {...this.props}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          styles={customStyles}
          isRtl={true}
          className="select-box"
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
