/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";

export const Card = styled.div`
    background-color: white;
    border-radius: 0.8rem;
    padding: 0.6rem;
    box-shadow: 0.2rem 0.4rem 1.6rem rgba(55, 84, 170, 0.1);
    user-select: none;
    display: flex;
    flex-direction: column;
    transition: all 150ms ease;

    &:hover {
        z-index: 9;
        box-shadow: 0.3rem 0.6rem 3rem rgba(55, 84, 170, 0.2);
    }
`;

export const CardTop = styled.div`
    position: relative;
    overflow: visible;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const CardImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 0.4rem;
    overflow: hidden;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const FavIconWrapper = styled.div`
    position: absolute;
    top: 100%;
    right: 14px;
    transform: translateY(-60%);
    overflow: visible;
`;

export const CardBody = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding-inline: 1rem;
    margin-top: 1.6rem;
    margin-bottom: 2rem;
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const CardTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const CardSubTitle = styled.h5`
    color: #939393;
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
`;

export const CardProperties = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: repeat(2, 1fr);
    column-gap: 1.6rem;
    row-gap: 0.6rem;
    margin-top: 0.8rem;
`;

export const CardProperty = styled.h5`
    font-size: 1.1rem;
    font-weight: 400;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.6rem;

    svg {
        width: 1.6rem;
        aspect-ratio: 1 / 1;
    }
`;

export const CardButtons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 6px;
    overflow: visible;
`;

export const CardButton = styled.button`
    outline: none;
    border: none;
    padding-block: 0.8rem;
    text-transform: uppercase;
    color: #5a5a5a;
    font-weight: 550;
    background-color: #f5f5f5;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 0.4rem;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all 150ms ease;
    /* margin-top: auto; */
    /* padding-inline: 0.8rem; */

    &:hover {
        background-color: #17b9ec;
        color: white;
        letter-spacing: 2px;
    }
`;

const StatusChangerButton = styled.button`
    padding: 1.2rem;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 550;
    letter-spacing: 1px;
    overflow: hidden;
    position: relative;

    span {
        transition: all 1s ease;
        display: none;
    }

    svg {
        fill: white;
        width: 16px;
        aspect-ratio: 1/1;
        stroke: white;
    }

    &:hover {
        opacity: 0.8;

        span {
            display: inline;
        }
    }
`;

export const RedButton = styled(StatusChangerButton)`
    background-color: red;
    color: white;
    box-shadow: 1px 2px 8px rgba(255, 0, 0, 0.2);
`;

export const GreenButton = styled(StatusChangerButton)`
    background-color: green;
    color: white;
    box-shadow: 1px 2px 8px rgba(0, 255, 0, 0.16);
`;
