/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import { ModalBody, ModalCloseButton, ModalTitle, ModalTitleBar, StyledModal } from "./Modal.js";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";

const Modal = ({ children, isOpen, toggleModal, title }) => {
    return (
        <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
            <ModalTitleBar>
                <ModalTitle>{title}</ModalTitle>
                <ModalCloseButton onClick={toggleModal}>
                    <CloseIcon />
                </ModalCloseButton>
            </ModalTitleBar>
            <ModalBody>{children}</ModalBody>
        </StyledModal>
    );
};

export default Modal;
