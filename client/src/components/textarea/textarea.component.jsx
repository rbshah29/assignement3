/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React from "react";

const TextArea = ({ label, children, handleOnChange, error, ...otherProps }) => (
    <div className="group">
        <label className="form__label" id={otherProps.id}>
            {label}
            <span className="required">{otherProps.required ? " *" : ""}</span>
        </label>
        <textarea className="form__field textarea__no-resize" name="highlight" rows="6" {...otherProps} />
        {error ? <span className="field__error-msg">{error}</span> : null}
    </div>
);

export default TextArea;
