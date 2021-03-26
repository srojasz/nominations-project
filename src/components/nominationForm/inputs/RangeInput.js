import React from "react";

import './rangeInput.scss';

const RangeInput = ({ dataForm, label, min, max, onChangeFormData }) => {
  const value = dataForm[label];
  return (
    <div className="range-field">
        {label ? <label className="range-field__label">{label}</label> : null}        
          <input
            className="range-field__input"
            name={label}
            min={min}
            max={max}
            type="range"
            onChange={onChangeFormData}
            value={value}
          />
      </div>
  );
};

export default RangeInput;
