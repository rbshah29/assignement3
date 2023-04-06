/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React from "react";
import "./input-field.styles.scss";

const InputField = ({ label, handleOnChange, error, ...otherProps }) => {
    return (
        <div className={`group ${otherProps.disabled ? "group-disabled" : ""}`}>
            <label className="form__label" htmlFor={otherProps.id}>
                {label} <span className="required">{otherProps.required ? "*" : ""}</span>
            </label>
            <input className="form__field" onChange={handleOnChange} {...otherProps} />
            {error ? <span className="field__error-msg">{error}</span> : null}
        </div>
    );
};

export default InputField;
