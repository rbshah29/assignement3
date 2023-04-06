/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";

export const ImageList = styled.div`
    display: flex;
    gap: 8px;
    margin-block: 1.6rem;
    overflow: scroll;
`;

export const Image = styled.img`
    min-width: 200px;
    width: 200px;
    aspect-ratio: 16 / 9;
    object-fit: contain;
    background-color: #f5f5f5;
    border-radius: 6px;
`;

export const Input = styled.input`
    padding-bottom: 1.6rem;
    padding: 2rem 1.6rem;
    border: 2px dashed #e3e3e3;
    border-radius: 0.8rem;
    width: 100%;
    margin-bottom: 1.6rem;
    cursor: pointer;
    transition: all 200ms ease;
    color: black;
    font-size: 1.4rem;

    &::-webkit-file-upload-button {
        background-color: #1091e1;
        outline: none;
        border: none;
        cursor: pointer;
        color: white;
        padding: 0.8rem 1.2rem;
        font-size: 1.4rem;
        border-radius: 0.4rem;

        &:hover {
            background-color: #1281c7;
            box-shadow: 1px 2px 8px rgba(55, 84, 1700, 0.16);
        }
    }

    &:hover {
        border: 2px dashed rgba(16, 145, 225, 0.4);
        background-color: rgba(16, 145, 225, 0.08);
    }
`;

export const Form = styled.form`
    /* padding: 0.8rem 1.2rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
