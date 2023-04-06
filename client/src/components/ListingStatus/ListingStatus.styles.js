/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";

export const Status = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.6rem 1.4rem;
    background-color: ${({ status }) => {
        if (status === "rejected") return "rgba(255, 0, 0, 0.1)";
        else if (status === "approved") return "rgb(80, 200, 120, 0.1);";
        else return "rgba(255, 141, 35, 0.1)";
    }};
    color: ${({ status }) => {
        if (status === "rejected") return "rgb(255, 0, 0)";
        else if (status === "approved") return "rgb(80, 200, 120);";
        else return "rgba(255, 141, 35)";
    }};
    border-radius: 0.4rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media only screen and (max-width: 600px) {
        /* display: none; */
    }
`;
