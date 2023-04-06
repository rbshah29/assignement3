/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React from "react";

const Dropdown = ({ label, error, ...otherProps }) => (
    <div className="group">
        <label className="form__label" id={otherProps.id}>
            {label}
            <span className="required">{otherProps.required ? " *" : ""}</span>
        </label>
        <select className="form__field" {...otherProps}>
            <option value="">-- Please Select Transmission --</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
        </select>
        {error ? <span className="field__error-msg">{error}</span> : null}
    </div>
);

export default Dropdown;
