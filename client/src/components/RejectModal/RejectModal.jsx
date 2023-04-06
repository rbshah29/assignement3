/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import { useDispatch } from "react-redux";
import { updateCarListings } from "../../redux/car-listing/carListing.reducers";
import axios from "../../utils/axios";
import { GreenButton } from "../CarCard/CarCard.styels";
import Modal from "../Modal/Modal.jsx";

const RejectModal = ({ vin, approveModal, setModal, toggle }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={approveModal}
      toggleModal={toggle}
      title="Reject Confirmation"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h4>Are you sure you want to approve this listing?</h4>
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
          <GreenButton
            onClick={async (e) => {
              setModal(false);
              const { data: response } = await axios.put(
                `/listing/approve/${vin}`,
                {}
              );
              console.log(response);
              dispatch(updateCarListings(response.car));
            }}
          >
            Confirm Approval
          </GreenButton>
        </div>
      </div>
    </Modal>
  );
};

export default RejectModal;
