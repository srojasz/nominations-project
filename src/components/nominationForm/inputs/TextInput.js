import React, { Fragment } from "react";

import './textInput.scss';

const TextInput = ({
  element,
  dataForm,
  error,
  onChangeFormData,
  label,
  name,
  placeholder,
  type,
}) => {
  const htmlprops = { name, placeholder, type };
  let inputElement = null;

  switch (element) {
    case "textarea":
      const textareaClasses = error ? "textarea input-error" : "textarea";
      inputElement = (
        <textarea
          className={textareaClasses}
          dataform={dataForm}
          error={error}
          onChange={onChangeFormData}
          {...htmlprops}
        />
      );
      break;
    default:
      const inputClasses = error ? "input input-error" : "input";
      inputElement = (
        <input
          className={inputClasses}
          dataform={dataForm}
          error={error}
          onChange={onChangeFormData}
          {...htmlprops}
        />
      );
  }

  return (
    <Fragment>
        {label ? <label className="label">{label}</label> : null}
      {inputElement}
      {error ? <p className="error">{error}</p> : null}
    </Fragment>
  );
};

export default TextInput;
