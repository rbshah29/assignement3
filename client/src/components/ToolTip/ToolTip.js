/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";

export const ToolTipText = styled.div`
    visibility: hidden;
    /* width: 120px; */
    background-color: #2a2a2a;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 16px;
    overflow: visible;
    position: absolute;
    top: 115%;
    left: 0%;
    z-index: 1;
    font-weight: 550;
    transform: translateX(-30%);
`;

export const ToolTipWrapper = styled.div`
    position: relative;
    display: inline-block;
    overflow: visible;

    &:hover ${ToolTipText} {
        visibility: visible;
    }
`;
