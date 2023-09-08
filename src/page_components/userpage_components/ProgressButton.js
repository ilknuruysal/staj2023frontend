import React from "react";

const ProgressButton = (props) => {
  const { onClick, pendingApiCall, disabled, text } = props;

  return (
    <button className="btn btn-primary" onClick={onClick} disabled={disabled}>
      {" "}
      {/*primary ile kutular etrafı mavilik gelir*/}
      {pendingApiCall ? (
        <span className="spinner-grow spinner-grow-sm"></span>
      ) : (
        text
      )}
    </button>
  );
};

export default ProgressButton;
