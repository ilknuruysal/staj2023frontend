import React from "react";

const Input = (props) => {
  const { label, name, error, type, onChange } = props;
  const className = error ? "form-control is-invalid" : "form-control";

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className={className}
        name={name}
        type={type}
        onChange={onChange}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;
