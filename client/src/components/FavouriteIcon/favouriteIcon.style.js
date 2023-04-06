/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";
import { ReactComponent as Heart } from "../../assets/heart.svg";

export const FavIcon = styled.div`
    width: 3rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: ${({ favourite }) => (favourite ? "#E05050" : "white")};
    box-shadow: ${({ favourite }) => (favourite ? "0.2rem 0.4rem 0.8rem rgba(224, 80, 80, 0.25)" : "0.2rem 0.4rem 0.8rem rgba(55, 84, 170, 0.16)")};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 150ms ease;

    svg {
        fill: ${({ favourite }) => (favourite ? "white" : "#939393")};
    }

    &:hover {
        box-shadow: ${({ favourite }) => (favourite ? "0.2rem 0.4rem 2rem rgba(224, 80, 80, 0.25);" : "0.2rem 0.4rem 2rem rgba(55, 84, 170, 0.2);")} svg {
            fill: ${({ favourite }) => (favourite ? "rgba(255,255,255,0.8)" : "#5f5f5f")};
        }
    }
`;

export const HeartIcon = styled(Heart)`
    fill: #939393;
`;
