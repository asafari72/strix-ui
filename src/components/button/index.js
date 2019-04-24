import React, { Component } from "react";
import "./index.scss";

const Button = React.memo(function Button(
  { name, icon, onClick, loading = false, type = "primary", size = "normal" },
  props
) {
  return (
    <div className={"button-container " + "btn-" + type + " btn-" + size}>
      {icon ? (
        <div className="button-right">
          <i className={"fas fa-" + icon} />
        </div>
      ) : (
        ""
      )}
      <button disabled={loading} onClick={onClick}>
        {loading ? <i className="fas fa-circle-notch fa-spin fa-lg" /> : name}
      </button>
    </div>
  );
});
export { Button };
