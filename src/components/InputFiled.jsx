import React from "react";

const InputFiled = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {name}
      </label>
      <input
        className={className}
        name={id}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : null}
      />
    </div>
  );
};

export default InputFiled;
