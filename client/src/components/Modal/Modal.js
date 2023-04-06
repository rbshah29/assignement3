/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
font-family: "Poppins";
  width: 500px;
  background-color: white;
  border-radius: 4px;
  transform: translateY(-5%);

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ModalTitleBar = styled.div`
    padding: 8px 16px;
    background-color: #2a2a2a;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalCloseButton = styled.div`
    fill: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 6px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.12);
    }
`;

export const ModalTitle = styled.div`
    font-size: 13px;
    color: white;
    text-transform: uppercase;
    font-weight: 550;
    letter-spacing: 1px;
`;

export const ModalBody = styled.div`
    background-color: white;
    padding: 8px 16px 16px 16px;
`;
