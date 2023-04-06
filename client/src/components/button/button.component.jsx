/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React from "react";
import "./button.styles.scss";

const Button = ({ text, children, ...otherProps }) => (
    <button className="btn btn--primary" {...otherProps}>
        {children}
    </button>
);

export default Button;
