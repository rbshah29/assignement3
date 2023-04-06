// AUTHOR : Dixit Kanubhai Ghodadara (B00913652) | dx343670@dal.ca

import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import Stripe from "../../assets/stripe.png";
import PaymentModal from "../payment-modal/PaymentModal";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { notSubmitted, setNullUser } from "../../redux/isLogin.reducers";
import path from "../../constants/paths";
import axios from "axios";
import { RedButton } from "../../components/CarCard/CarCard.styels";
import Modal from "../../components/Modal/Modal.jsx";
import UpdateProfilePage from "../update-profile-page/update-profile.component";

const ProfilePage = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const stripePromise = loadStripe(
    "pk_test_51MfkHeLTbquCQlBdArT15pgpC9noVYdwChrPzKg4OsGqQD2BR8gjhFvivUUSZGC0j4nRkFhWC05uYGkM9gIUUcPT000W9TFkjy"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function toggleModal(e) {
    SetIsOpen(!isOpen);
  }

  // Delete the user from Mongo Database. (Author: Shvet Anaghan || B00917946)
  const handleRemoveAccount = (event) => {
    event.preventDefault();
    try {
      axios({
        method: "post",
        url: "https://bid-my-ride-server.onrender.com/user/delete",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.data.status) {
            localStorage.removeItem("token");
            dispatch(notSubmitted());
            dispatch(setNullUser());
            navigate(path.LOGIN);
          } else {
            alert(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      alert("Something went wrong in axios.");
    }
  };

  // User Logout( Remove token from storage) and navigate to the Login Page. (Author: Shvet Anaghan || B00917946)
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(notSubmitted());
    dispatch(setNullUser());
    navigate(path.LOGIN);
  };

  return (
    <>
      <ProfilePageWrapper>
        <ProfileRowContainer>
          <PageTitle>Profile</PageTitle>
          <PaymentMethod
            style={{
              marginLeft: "20px",
            }}
            onClick={() => {
              setIsShow(true);
            }}
          >
            Update Profile
          </PaymentMethod>
        </ProfileRowContainer>

        <Divider />
        <Modal
          isOpen={isShow}
          title="Update Account"
          toggleModal={() => {
            setIsShow((prevState) => !prevState);
          }}
        >
          <UpdateProfilePage />
        </Modal>
        <SemiTitle>Account</SemiTitle>
        <LinkedAccounts>Linked Accounts</LinkedAccounts>

        <RowContainer>
          <FcGoogle size={"4rem"} style={{ marginRight: "10px" }} />
          <SmallText>google@gmail.com</SmallText>
        </RowContainer>

        <AccountRow>
          <RemoveAccountButton
            onClick={() => {
              setIsDelete(true);
            }}
          >
            {" "}
            Delete Account{" "}
          </RemoveAccountButton>
          <Modal
            isOpen={isDelete}
            title="DELETE ACCOUNT"
            toggleModal={() => {
              setIsDelete((prevState) => !prevState);
            }}
          >
            <form>
              <h4>Are you sure you want to delete your account?</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <RedButton onClick={handleRemoveAccount}>Delete</RedButton>
              </div>
            </form>
          </Modal>
          <LogoutButton
            onClick={(e) => {
              setIsLogout((prevState) => !prevState);
            }}
          >
            Logout
          </LogoutButton>
          <Modal
            isOpen={isLogout}
            title="LOGOUT"
            toggleModal={() => {
              setIsLogout((prevState) => !prevState);
            }}
          >
            <form>
              <h4>Are you sure you want to LogOut?</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <RedButton onClick={handleLogout}>LogOut</RedButton>
              </div>
            </form>
          </Modal>
        </AccountRow>

        <Divider />
        <SemiTitle>Payment</SemiTitle>

        <PaymentMethod onClick={toggleModal}>Payment Method</PaymentMethod>

        <RowContainer>
          <SmallText style={{ color: "gray", fontSize: "14px" }}>
            Powered by
          </SmallText>
          <StripeLogo src={Stripe} />
        </RowContainer>
        <Elements stripe={stripePromise}>
          <PaymentModal isOpen={isOpen} toggleModal={toggleModal} />
        </Elements>
      </ProfilePageWrapper>
    </>
  );
};

export default ProfilePage;

const ProfilePageWrapper = styled.div`
  padding-top: 50px;
  width: 50%;
  float: left;
  vertical-align: bottom;
  background-color: #ffffff;

  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

const PageTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

const Divider = styled.hr`
  border: 1.5px solid;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #dbdbdb;
  border-radius: 10px;
`;

const SemiTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;

const LinkedAccounts = styled.h4`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const RowContainer = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const ProfileRowContainer = styled.div`
  justify-content: space-between;
  padding: 2px;
  display: flex;
  flex-direction: row;
`;

const AccountRow = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media screen and (max-width: 580px) {
    font-size: 14px;
  }
`;

const SmallText = styled.h2`
  align-self: center;
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 580px) {
    font-size: 16px;
  }
`;

const RemoveAccountButton = styled.button`
  background-color: #f5f5f5;
  align-self: center;
  font-size: 15px;
  width: 150px;
  min-height: 30px;
  border-radius: 3px;
  border: 2px solid #bebebe;

  :hover {
    border: 2px solid #e61616a0;
    background-color: #dad8d8;
  }
  :active {
    background-color: #c0c0c0;
  }

  @media screen and (max-width: 580px) {
    max-width: 120px;
    font-size: 13px;
  }
`;
export const PaymentMethod = styled.button`
  background-color: #17b9ec;
  color: white;
  margin-left: auto;
  margin-top: 12px;
  align-self: center;
  font-size: 15px;
  width: 180px;
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
const LogoutButton = styled.button`
  background-color: #05000097;
  color: white;
  margin-left: 15px;
  align-self: center;
  font-size: 15px;
  width: 150px;
  min-height: 30px;
  border-radius: 3px;
  border: 1px solid black;

  :hover {
    background-color: #202020;
  }
  @media screen and (max-width: 580px) {
    max-width: 120px;
    font-size: 14px;
  }
`;
