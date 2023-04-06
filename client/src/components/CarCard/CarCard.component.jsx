/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import path from "../../constants/paths";
import { ReactComponent as MileageIcon } from "../../assets/mileage.svg";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";
import { ReactComponent as EngineIcon } from "../../assets/engine.svg";
import { ReactComponent as TransmissionIcon } from "../../assets/transmission.svg";
import { ReactComponent as ApproveIcon } from "../../assets/done.svg";
import { ReactComponent as RejectIcon } from "../../assets/close.svg";

import {
    Card,
    CardBody,
    CardButton,
    CardButtons,
    CardHeader,
    CardImage,
    CardImageWrapper,
    CardProperties,
    CardProperty,
    CardSubTitle,
    CardTitle,
    CardTop,
    FavIconWrapper,
    GreenButton,
    RedButton,
} from "./CarCard.styels";

import FavouriteIcon from "../FavouriteIcon/favouriteIcon";
import { useDispatch, useSelector } from "react-redux";
import { updateCarListings } from "../../redux/car-listing/carListing.reducers";
import ListingStatus from "../ListingStatus/ListingStatus.component";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import axios from "../../utils/axios";

const CarCard = ({ car }) => {
    const [approveModal, setApproveModal] = useState(false);
    const [rejectModal, setRejectModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.loginStatus.userInfo);

    const { carCompany, carModel, favorite, vin, carMileage, location, carEngine, images, transmission, status } = car;

    return (
        <>
            <Card>
                <CardTop>
                    <CardImageWrapper>
                        <CardImage src={images[0]} />
                    </CardImageWrapper>
                    <FavIconWrapper>
                        <FavouriteIcon
                            favourite={favorite}
                            handleOnClick={async () => {
                                const { data: response } = await axios.post(`/listing/favorite/${vin}`, {
                                    favorite: !favorite,
                                });

                                dispatch(updateCarListings(response.car));
                            }}
                        />
                    </FavIconWrapper>
                </CardTop>

                <CardBody>
                    <CardHeader>
                        <div>
                            <CardTitle>{`${carCompany} ${carModel}`}</CardTitle>
                            <CardSubTitle>{vin}</CardSubTitle>
                        </div>
                        <ListingStatus status={status} />
                    </CardHeader>
                    <CardProperties>
                        <CardProperty>
                            <MileageIcon />
                            <span>{carMileage}</span>
                        </CardProperty>
                        <CardProperty>
                            <LocationIcon />
                            <span>{location}</span>
                        </CardProperty>
                        <CardProperty>
                            <TransmissionIcon />
                            <span>{transmission}</span>
                        </CardProperty>
                        <CardProperty>
                            <EngineIcon />
                            <span>{carEngine}</span>
                        </CardProperty>
                    </CardProperties>
                </CardBody>
                {user.role === "admin" ? (
                    <CardButtons>
                        <CardButton
                            onClick={() => {
                                navigate(`${path.NEW_LISTINGS}/${vin}`);
                            }}
                        >
                            More
                        </CardButton>
                        <CardButtons>
                            <GreenButton
                                onClick={async () => {
                                    setApproveModal(true);
                                }}
                            >
                                <ApproveIcon /> <span>Approve</span>
                            </GreenButton>
                            <RedButton
                                onClick={async () => {
                                    setRejectModal(true);
                                }}
                            >
                                <RejectIcon /> <span>Reject</span>
                            </RedButton>
                        </CardButtons>
                    </CardButtons>
                ) : (
                    <CardButton
                        onClick={() => {
                            navigate(`${path.NEW_LISTINGS}/${vin}`);
                        }}
                    >
                        More Info
                    </CardButton>
                )}
            </Card>

            <ConfirmationModal
                currentStatus="approve"
                vin={vin}
                title="Accept Confirmation"
                description="Are you sure you want to accept this listing?"
                approveModal={approveModal}
                setModal={(state) => {
                    setApproveModal(state);
                }}
                toggle={() => {
                    setApproveModal((prevState) => !prevState);
                }}
            />
            <ConfirmationModal
                currentStatus="reject"
                vin={vin}
                title="Reject Confirmation"
                description="Are you sure you want to reject this listing?"
                approveModal={rejectModal}
                setModal={(state) => {
                    setRejectModal(state);
                }}
                toggle={() => {
                    setRejectModal((prevState) => !prevState);
                }}
            />
        </>
    );
};

export default CarCard;
