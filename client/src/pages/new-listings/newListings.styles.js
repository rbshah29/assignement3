/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";

export const CarListingsWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const CarsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    overflow: visible;
    gap: 1.2rem;
    padding: 1.2rem;
`;
