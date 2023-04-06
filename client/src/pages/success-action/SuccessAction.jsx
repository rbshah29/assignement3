import Modal from "styled-react-modal";
import Lottie from "lottie-react";
import styled from "styled-components";
import Checkmark from "../../assets/ch.json";

import {
    ModalColumContainter,
    CloseButton,
    ModalRow,
} from "../payment-modal/PaymentModal";

function SuccessAction({ isOpen, toggleModal }) {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: Checkmark,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    //   };

    return (
        <>
            <SuccessModal isOpen={isOpen} toggleModal={toggleModal}>
                <ModalColumContainter>
                    <ModalRow>
                        <CloseButton onClick={toggleModal}>X</CloseButton>
                    </ModalRow>
                    <SuccessMessage>
                        Your card has successfully saved{" "}
                    </SuccessMessage>

                    <LottieContainer>
                        <Lottie animationData={Checkmark} />
                    </LottieContainer>
                </ModalColumContainter>
            </SuccessModal>
        </>
    );
}

export const SuccessModal = Modal.styled`
  width: 40rem;
  height: max-content;
  border-radius: 10px;
  display: flex;
  padding-inline: 25px;
  align-items: top;
  justify-content: center;
  background-color: #ffffff;
  transition: all 0.8s ease-in-out;

  @media screen and (max-width: 580px){                                                                        
    width: 30rem;
}`;
const SuccessMessage = styled.h4`
    margin-inline: auto;
    margin-block: 5px;
    font-size: 18px;

    @media screen and (max-width: 580px) {
        font-size: 15px;
    }
`;

const LottieContainer = styled.div`
    margin-inline: auto;
    width: 200px;
    height: 220px;
`;

export default SuccessAction;
