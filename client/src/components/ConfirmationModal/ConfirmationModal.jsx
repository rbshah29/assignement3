/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import { useDispatch } from "react-redux";
import { updateCarListings } from "../../redux/car-listing/carListing.reducers";
import axios from "../../utils/axios";
import { GreenButton, RedButton } from "../CarCard/CarCard.styels";
import Modal from "../Modal/Modal.jsx";

const ConfirmationModal = ({ vin, approveModal, description, setModal, toggle, currentStatus, title = "Default Title" }) => {
    const dispatch = useDispatch();

    return (
        <Modal isOpen={approveModal} toggleModal={toggle} title={title}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                <h4>{description}</h4>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                        gap: "8px",
                    }}
                >
                    <button
                        onClick={(e) => {
                            setModal(false);
                        }}
                        style={{
                            outline: "none",
                            border: "none",
                            backgroundColor: "#e5e5e5",
                            color: "#707070",
                            padding: "1rem",
                            borderRadius: "4px",
                            fontSize: "10px",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            fontWeight: "550",
                            cursor: "pointer",
                        }}
                    >
                        Cancel
                    </button>
                    {currentStatus.toLowerCase() === "approve" ? (
                        <GreenButton
                            onClick={async (e) => {
                                setModal(false);
                                const { data: response } = await axios.put(
                                    `/listing/approve/${vin}`,
                                    {},
                                    {
                                        headers: {
                                            "x-access-token": localStorage.getItem("token"),
                                        },
                                    }
                                );
                                console.log(response);
                                dispatch(updateCarListings(response.car));
                            }}
                        >
                            Confirm Approval
                        </GreenButton>
                    ) : (
                        <RedButton
                            onClick={async (e) => {
                                setModal(false);
                                const { data: response } = await axios.put(
                                    `/listing/reject/${vin}`,
                                    {},
                                    {
                                        headers: {
                                            "x-access-token": localStorage.getItem("token"),
                                        },
                                    }
                                );
                                console.log(response);
                                dispatch(updateCarListings(response.car));
                            }}
                        >
                            Confirm Rejection
                        </RedButton>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;
