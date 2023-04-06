// AUTHOR : Dixit Kanubhai Ghodadara (B00913652) | dx343670@dal.ca

import styled from "styled-components";
import Modal from "styled-react-modal";
import { CardElement } from "@stripe/react-stripe-js";
import StripePNG from "../../assets/stripe.png";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import SuccessAction from "../success-action/SuccessAction";

function PaymentModal({ isOpen, toggleModal }) {
    const [isValidated, setValidated] = useState(false);
    const [errorFlag, setError] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    function toggleSuccessModal(e) {
        toggleModal(false);
        setValidated(!isValidated);
    }

    console.log(errorFlag);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (elements == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (error) {
            setError(true);
            setValidated(false);
        } else {
            setError(false);
            setValidated(true);
        }
    };

    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: "#32325d",
                fontSmoothing: "antialiased",
                fontSize: "18px",
                "::placeholder": {
                    color: "#aab7c4",
                },
            },
            invalid: {
                color: "#a71d01",
                iconColor: "#a71d01",
            },
        },
    };

    return (
        <>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
            >
                <ModalColumContainter>
                    <ModalRow>
                        <BmRTitle>BID MY RIDE</BmRTitle>
                        <CloseButton onClick={toggleModal}>X</CloseButton>
                    </ModalRow>

                    <ModalRow>
                        <h2>Payment Method</h2>
                    </ModalRow>

                    <SubPara>
                        We require a valid credit card on file before you can
                        bid. Winning bidders pay a 4.5% buyers fee to Bids My
                        Ride on top of the winning bid amount. <br></br>
                        Bids are binding, so please bid wisely!
                    </SubPara>

                    <CCHeading>Credit Card Information</CCHeading>

                    <StyledForm id="localInfo" onSubmit={handleSubmit}>
                        <StyledLabel>Name on the card</StyledLabel>
                        <StyledInput required type="text"></StyledInput>

                        <StyledLabelZip>Zip / Postal Code</StyledLabelZip>
                        <StyledInput
                            required
                            style={{ width: "150px" }}
                            type="text"
                        ></StyledInput>

                        <CardInfoRow>
                            <StyledLabelZip>Card Information</StyledLabelZip>
                            <StyledLabelZip>Expiry / CVV</StyledLabelZip>
                        </CardInfoRow>

                        <CardElement options={CARD_ELEMENT_OPTIONS} />
                        <SaveCardButton
                            type="submit"
                            form="localInfo"
                            disabled={!stripe}
                        >
                            SAVE MY CARD
                        </SaveCardButton>
                    </StyledForm>
                    <StripeBrandRow>
                        <SmallText style={{ color: "gray", fontSize: "14px" }}>
                            Powered by
                        </SmallText>
                        <StripeLogo src={StripePNG} />
                    </StripeBrandRow>
                </ModalColumContainter>

                <SuccessAction
                    isOpen={isValidated}
                    toggleModal={toggleSuccessModal}
                ></SuccessAction>
            </StyledModal>
        </>
    );
}

export const StyledModal = Modal.styled`
  width: 45rem;
  height: max-content;
  border-radius: 10px;
  display: flex;
  padding-inline: 25px;
  align-items: top;
  justify-content: center;
  background-color: #ffffff;
  transition: all 0.8s ease-in-out;

  @media screen and (max-width: 580px){                                                                        
    width: 35rem;
}
`;
export const ModalColumContainter = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ModalRow = styled.div`
    margin-top: 10px;
    min-width: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 580px) {
        min-width: 200px;
    }
`;
export const CloseButton = styled.button`
    width: 20px;
    height: 20px;
    color: gray;
    background-color: transparent;
    margin-left: auto;
    font-size: 15px;
    border: none;
    border-radius: 20px;

    :hover {
        background-color: #e6e6e6cc;
    }
`;

export const BmRTitle = styled.h3`
    margin-left: auto;
    font-size: 15px;
`;

const SubPara = styled.p`
    font-size: 15px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-top: 5px;
`;

const CCHeading = styled.h3`
    margin-top: 10px;
    font-size: 15px;
    font-weight: 600;
`;

const StyledForm = styled.form`
    margin-top: 15px;
`;

export const StyledInput = styled.input`
    width: 100%;
    background-color: #f5f5f5;
    padding: 10px;
    border: 1px solid #cacaca;
    border-radius: 5px;
    font-size: 16px;

    :focus {
        outline: none;
        background-color: white;
        border: 1px solid #17b9ec;
    }
`;
export const StyledLabel = styled.label`
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
`;
export const StyledLabelZip = styled.label`
    display: block;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 8px;
`;

export const CardInfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const StripeBrandRow = styled.div`
    margin-block: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const SaveCardButton = styled.button`
    background-color: #17b9ec;
    color: white;
    margin-right: auto;
    margin-top: 25px;
    align-self: center;
    font-size: 15px;
    width: 150px;
    min-height: 35px;
    border-radius: 3px;
    border: none;

    :hover {
        background-color: #00c3ff;
    }
`;
const StripeLogo = styled.img`
    margin-left: -15px;
    width: 100px;
    height: 40px;
    scale: 0.55;
`;
const SmallText = styled.h2`
    align-self: center;
    font-size: 18px;
    font-weight: 500;
`;

export default PaymentModal;
