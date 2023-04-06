/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React from "react";
import { Link } from "react-router-dom";
import path from "../../constants/paths";
import "./logo.styles.scss";

const Logo = () => (
    <div className="logo">
        <Link to={path.HOME}>
            Bid <span className="middle">My</span> <span>Ride</span>
        </Link>
    </div>
);

export default Logo;
