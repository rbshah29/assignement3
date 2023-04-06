/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";

import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Upload } from "../../assets/upload.svg";
import { ReactComponent as Download } from "../../assets/download.svg";

export const CarDetailsPage = styled.div`
    overflow: scroll;
    height: 95vh;
    position: relative;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const CarDetailsTop = styled.div`
    overflow: auto;

    @media only screen and (max-width: 768px) {
        overflow: scroll;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.8rem;

    @media only screen and (max-width: 768px) {
        width: 85vw;
    }
`;

export const CarImages = styled.div`
    display: grid;
    height: 40vh;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.8rem;

    & ${Image}:nth-child(1) {
        grid-row: 1 / -1;
        grid-column: 1 / 7;
    }

    & ${Image}:nth-child(2) {
        grid-column: 7 / span 2;
        grid-row: 1 / span 2;
    }

    & ${Image}:nth-child(3) {
        grid-column: 9 / span 2;
        grid-row: 1 / span 2;
    }

    & ${Image}:nth-child(4) {
        grid-column: 7 / span 2;
        grid-row: 3 / span 2;
    }

    & ${Image}:nth-child(n+5) {
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        width: max-content;
        height: 30vh;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const CarHeader = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    padding-block: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
    box-shadow: 0 2px 0.8rem rgba(55, 84, 170, 0.16);
    background-color: white;
    overflow: visible;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 16px;
    }
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

export const HeaderRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    gap: 1.6rem;

    @media only screen and (max-width: 768px) {
        padding-left: 48px;
        justify-content: space-between;
        width: 100%;
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    overflow: visible;
`;

export const CarTitle = styled.h2`
    font-size: 2.2rem;
    font-weight: 600;
`;

export const TitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const IconWrapper = styled.div`
    border: 1px solid #e3e3e3;
    width: 3.2rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 150ms ease;

    &:hover {
        background-color: #f5f5f5;

        svg {
            stroke: #303030;
        }
    }

    svg {
        stroke: #939393;
    }
`;

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
    margin-left: 0.8rem;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const DeleteIcon = styled(Delete)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    fill: #909090;
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
        fill: #e05050;
    }
`;

export const EditIcon = styled(Edit)`
    fill: #909090;
    cursor: pointer;

    &:hover {
        fill: #1091e1;
    }
`;

export const UploadIcon = styled(Upload)`
    fill: #909090;
    cursor: pointer;

    &:hover {
        fill: #1091e1;
    }
`;

export const DownloadIcon = styled(Download)`
    fill: #909090;
    cursor: pointer;

    &:hover {
        fill: #1091e1;
    }
`;

export const CarDetailsBody = styled.div`
    display: grid;
    align-content: start;
    grid-template-columns: 20% 1fr;
    background-color: #f5f5f5;
    overflow: visible;
    gap: 1.2rem;
    padding: 2rem;

    @media only screen and (max-width: 1300px) {
        grid-template-columns: 25% 1fr;
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-auto-rows: max-content;
    }
`;

export const CarProperties = styled.div`
    align-self: start;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 0.8rem;
    overflow: visible;

    @media only screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, max-content);
    }
`;

export const CarProperty = styled.div`
    background-color: white;
    padding: 0.6rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;
    border-radius: 0.6rem;
    box-shadow: 0.2rem 0.4rem 1.6rem rgba(55, 84, 170, 0.1);
    justify-self: start;

    svg {
        width: 2rem;
        aspect-ratio: 1 / 1;
    }

    @media only screen and (max-width: 768px) {
        justify-self: stretch;
    }
`;

export const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const PropertyTitle = styled.span`
    font-size: 1.2rem;
    color: #939393;
    font-weight: 500;
`;

export const PropertyValue = styled.h4`
    font-size: 1.4rem;
    font-weight: 600;
    color: black;
    margin-top: 3px;
`;

export const DescriptionGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding-block: 1.6rem;
`;

export const CarDescription = styled.div`
    padding-inline: 2rem;
    display: flex;
    flex-direction: column;

    ${DescriptionGroup}:not(:last-child) {
        border-bottom: 1px solid #e3e3e3;
    }
`;

export const DescriptionHeading = styled.h4`
    font-size: 1.4rem;
    font-weight: 600;
    color: black;
`;

export const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: #939393;
`;
