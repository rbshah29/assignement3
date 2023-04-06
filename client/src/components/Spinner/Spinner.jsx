/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";

const Spinner = () => (
    <SpinnerContainer>
        <LoadingSpinner></LoadingSpinner>
    </SpinnerContainer>
);

const SpinnerContainer = styled.div``;

const LoadingSpinner = styled.div`
    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    width: 40px;
    aspect-ratio: 1 /1;
    /* border: 5px solid #f5f5f5; */
    border-top: 5px solid #1091e1;
    border-radius: 50%;
    animation: spinner 1s ease infinite;
`;

export default Spinner;
