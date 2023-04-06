/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled, { css } from "styled-components";

import { ReactComponent as Vector } from "../../assets/listingsEmptyState.svg";

export const CarListingsWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    position: relative;
`;

export const TabsWrapper = styled.div`
    display: flex;
    gap: 0.6rem;
    align-items: center;
    overflow: visible;
    padding-inline: 0.8rem;
`;

export const Tab = styled.div`
    padding: 0.6rem 1.2rem;
    border-radius: 1000px;
    cursor: pointer;
    transition: all 200ms ease;
    font-size: 1.2rem;
    font-weight: 500;
    /* background-color: ${({ active }) => (active ? "white" : "#f5f5f5")};
    color: ${({ active }) => (active ? "#1091e1" : "#707070")};
    box-shadow: ${({ active }) => (active ? "2px 4px 8px rgba(55, 84, 170, 0.16)" : "none")}; */
    background-color: #f5f5f5;
    color: #707070;
    /* box-shadow: 2px 4px 8px rgba(55, 84, 170, 0.16); */

    ${({ active }) =>
        active
            ? css`
                  background-color: white;
                  color: #1091e1;
                  box-shadow: 2px 4px 8px rgba(55, 84, 170, 0.16);
              `
            : css`
                  &:hover {
                      /* box-shadow: 2px 4px 8px rgba(55, 84, 170, 0.16); */
                      background-color: #ececec;
                      color: #101010;
                  }
              `}
`;

export const CarsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    overflow: visible;
    gap: 1.2rem;
    padding: 1.2rem;

    @media only screen and (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const EmptyStateWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    @media only screen and (max-width: 900px) and (orientation: landscape) {
        top: 65%;
    }
`;

export const EmptyStateVector = styled(Vector)`
    width: 350px;
    height: auto;

    @media only screen and (max-width: 768px) {
        width: 250px;
    }
`;

export const EmptyStateTitle = styled.h4`
    font-size: 2.4rem;
    margin-top: 2.4rem;
    font-weight: 500;

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
        margin-top: 1.8rem;
    }
`;

export const EmptyStateDescription = styled.p`
    font-size: 1.2rem;
    width: 70%;
    margin: 0 auto;
    opacity: 0.8;
    line-height: 1.6;

    @media only screen and (max-width: 768px) {
        font-size: 1.1rem;
        width: 95%;
        line-height: 1.5;
    }
`;
