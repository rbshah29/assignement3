/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";

export const Container = styled.div`
    background-color: red;
    height: 100vh;
`;

export const ButtonWrapper = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        padding-inline: 1.2rem;
    }
`;
