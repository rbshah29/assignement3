/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as MileageIcon } from "../../assets/mileage.svg";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";
import { ReactComponent as EngineIcon } from "../../assets/engine.svg";
import { ReactComponent as TransmissionIcon } from "../../assets/transmission.svg";

import path from "../../constants/paths";

import {
    ActionButtons,
    CarDescription,
    CarDetailsBody,
    CarDetailsPage,
    CarDetailsTop,
    CarHeader,
    CarImages,
    CarProperties,
    CarProperty,
    CarTitle,
    DeleteIcon,
    DescriptionGroup,
    DescriptionHeading,
    DownloadIcon,
    EditIcon,
    HeaderLeft,
    HeaderRight,
    IconWrapper,
    Image,
    PropertyTitle,
    PropertyValue,
    PropertyWrapper,
    Text,
    TitleGroup,
    UploadIcon,
} from "./listingDetailsPage.styles";
import { CardButtons, CardSubTitle, GreenButton, RedButton } from "../../components/CarCard/CarCard.styels";
import FavouriteIcon from "../../components/FavouriteIcon/favouriteIcon";
import Button from "../../components/button/button.component";

import { ReactComponent as BackArrow } from "../../assets/back-arrow.svg";
import { deleteCarListings, updateCarListings } from "../../redux/car-listing/carListing.reducers";
import ListingStatus from "../../components/ListingStatus/ListingStatus.component";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal.jsx";
import axios from "../../utils/axios";
import Modal from "../../components/Modal/Modal.jsx";

import { ReactComponent as WarningVector } from "../../assets/warning.svg";
import ToolTip from "../../components/ToolTip/ToolTip.jsx";
import { Input } from "../sell-car-page/step-three/stepThree.style";

const ListingDetailsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.loginStatus.userInfo);

    const [approveModal, setApproveModal] = useState(false);
    const [rejectModal, setRejectModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [uploadModal, setUploadModal] = useState(false);
    const [documents, setDocuments] = useState([]);

    const { vin } = useParams();
    const car = useSelector((state) => state.carListing.cars).find((car) => car.vin === vin);
    const {
        carCompany,
        carMileage,
        transmission,
        location,
        carEngine,
        carModel,
        vin: carVIN,
        highlight,
        recentServiceHistory,
        ownershipHistory,
        sellerNotes,
        sellerName,
        status,
        favorite,
        userId,
    } = car;

    return (
        <>
            <CarDetailsPage>
                <ConfirmationModal
                    title="Accept Confirmation"
                    description="Are you sure you want to approve this listing?"
                    currentStatus="approve"
                    vin={carVIN}
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
                    vin={carVIN}
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
                <Modal
                    title="Upload Documents"
                    isOpen={uploadModal}
                    toggleModal={() => {
                        setUploadModal((prevState) => !prevState);
                    }}
                >
                    <h4>Select one or more .pdf files to upload</h4>
                    <form
                        encType="multipart/form-data"
                        id="car-documents-form"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            console.log(documents);

                            await axios.post(
                                "/document/upload",
                                {
                                    vin,
                                    carCompany,
                                    documents,
                                },
                                {
                                    headers: {
                                        "Content-Type": "multipart/form-data",
                                        "x-access-token": localStorage.getItem("token"),
                                    },
                                }
                            );

                            setUploadModal(false);
                        }}
                    >
                        <Input
                            type="file"
                            accept=".pdf"
                            name="documents"
                            multiple
                            onChange={(e) => {
                                const form = document.getElementById("car-documents-form");
                                const data = new FormData(form);
                                const documents = [];
                                for (const [key, value] of data) {
                                    console.log(key);
                                    console.log(value);
                                    documents.push(value);
                                }
                                setDocuments(documents);
                            }}
                        />
                        <div
                            style={{
                                marginTop: "16px",
                            }}
                        >
                            <Button type="submit">SUBMIT</Button>
                        </div>
                    </form>
                </Modal>
                <Modal
                    title="Delete Confirmation"
                    toggleModal={() => {
                        setDeleteModal((prevState) => !prevState);
                    }}
                    isOpen={deleteModal}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "32px",
                            marginTop: "16px",
                        }}
                    >
                        <div
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <WarningVector />
                            <h4
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                Are you sure you want to delete?
                            </h4>
                            <p
                                style={{
                                    opacity: "0.8",
                                    fontWeight: "400",
                                    width: "70%",
                                    margin: "0 auto",
                                }}
                            >
                                Make sure you are 100% sure about deleting this listing. You will not be able to recover it back.
                            </p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                            }}
                        >
                            <button
                                onClick={(e) => {
                                    setDeleteModal(false);
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
                            <RedButton
                                onClick={async () => {
                                    setDeleteModal(false);
                                    await axios.delete(`/listing/${carVIN}`);
                                    dispatch(deleteCarListings({ vin: carVIN }));
                                    navigate(path.NEW_LISTINGS);
                                }}
                            >
                                Delete
                            </RedButton>
                        </div>
                    </div>
                </Modal>
                <CarDetailsTop>
                    <CarImages>
                        {car.images.map((image, i) => {
                            if (i <= 7) {
                                return <Image src={image} alt="Car Image" key={image} />;
                            } else {
                                return <></>;
                            }
                        })}
                    </CarImages>
                </CarDetailsTop>
                <CarHeader>
                    <HeaderLeft>
                        <Link to={path.NEW_LISTINGS}>
                            <IconWrapper>
                                <BackArrow />
                            </IconWrapper>
                        </Link>
                        <TitleGroup>
                            <CarTitle>
                                {carCompany} {carModel}
                            </CarTitle>
                            <CardSubTitle>{carVIN}</CardSubTitle>
                        </TitleGroup>
                        <ListingStatus status={status} />
                    </HeaderLeft>
                    <HeaderRight>
                        {user.role === "admin" ? (
                            <>
                                <CardButtons>
                                    <GreenButton
                                        onClick={async (e) => {
                                            setApproveModal(true);
                                        }}
                                    >
                                        Approve
                                    </GreenButton>
                                    <RedButton
                                        onClick={async (e) => {
                                            setRejectModal(true);
                                        }}
                                    >
                                        Reject
                                    </RedButton>
                                </CardButtons>
                            </>
                        ) : null}

                        <ActionButtons>
                            {user.role === "admin" || (user._id === userId && status === "under-review") ? (
                                <>
                                    <ToolTip hoverText="Delete">
                                        <DeleteIcon
                                            onClick={() => {
                                                setDeleteModal(true);
                                            }}
                                        />
                                    </ToolTip>
                                </>
                            ) : null}

                            {status === "under-review" && user._id === userId ? (
                                <>
                                    <ToolTip hoverText="Edit">
                                        <EditIcon
                                            onClick={() => {
                                                navigate(`${path.SELL_CAR}/${carVIN}`);
                                            }}
                                        />
                                    </ToolTip>
                                </>
                            ) : null}

                            {user._id === userId ? (
                                <>
                                    <ToolTip hoverText="Upload">
                                        <UploadIcon
                                            onClick={() => {
                                                setUploadModal(true);
                                                // navigate("/upload-documents", {
                                                //     state: {
                                                //         vin: carVIN,
                                                //         carCompany,
                                                //     },
                                                // });
                                            }}
                                        />
                                    </ToolTip>
                                </>
                            ) : null}

                            {user._id === userId || user.role === "admin" ? (
                                <>
                                    <ToolTip hoverText="Download">
                                        <DownloadIcon
                                            onClick={async () => {
                                                console.log(`/document/download/${carVIN}`);
                                                axios
                                                    .get(`/document/download/${carVIN}`, {
                                                        headers: {
                                                            "x-access-token": localStorage.getItem("token"),
                                                        },
                                                        responseType: "blob",
                                                    })
                                                    .then((response) => {
                                                        const url = window.URL.createObjectURL(new Blob([response.data]));
                                                        const a = document.createElement("a");
                                                        a.href = url;
                                                        a.setAttribute("download", `${vin}.zip`);
                                                        document.body.appendChild(a);
                                                        a.click();

                                                        window.URL.revokeObjectURL(url);
                                                        document.body.removeChild(a);
                                                    });
                                            }}
                                        />
                                    </ToolTip>
                                </>
                            ) : null}

                            <FavouriteIcon
                                favourite={favorite}
                                handleOnClick={async () => {
                                    const { data: response } = await axios.post(`/listing/favorite/${carVIN}`, {
                                        favorite: !favorite,
                                    });
                                    console.log(response);
                                    dispatch(updateCarListings(response.car));
                                }}
                            />
                        </ActionButtons>
                    </HeaderRight>
                </CarHeader>
                <CarDetailsBody>
                    <CarProperties>
                        <CarProperty>
                            <MileageIcon />
                            <PropertyWrapper>
                                <PropertyTitle>Mileage</PropertyTitle>
                                <PropertyValue>{carMileage}</PropertyValue>
                            </PropertyWrapper>
                        </CarProperty>

                        <CarProperty>
                            <LocationIcon />
                            <PropertyWrapper>
                                <PropertyTitle>Location</PropertyTitle>
                                <PropertyValue>{location}</PropertyValue>
                            </PropertyWrapper>
                        </CarProperty>
                        <CarProperty>
                            <TransmissionIcon />
                            <PropertyWrapper>
                                <PropertyTitle>Transmission</PropertyTitle>
                                <PropertyValue>{transmission}</PropertyValue>
                            </PropertyWrapper>
                        </CarProperty>
                        <CarProperty>
                            <EngineIcon />
                            <PropertyWrapper>
                                <PropertyTitle>Engine</PropertyTitle>
                                <PropertyValue>{carEngine}</PropertyValue>
                            </PropertyWrapper>
                        </CarProperty>
                    </CarProperties>
                    <CarDescription>
                        <DescriptionGroup>
                            <DescriptionHeading>Seller Name</DescriptionHeading>
                            <Text>{sellerName}</Text>
                        </DescriptionGroup>
                        <DescriptionGroup>
                            <DescriptionHeading>Highlight</DescriptionHeading>
                            <Text>{highlight}</Text>
                        </DescriptionGroup>
                        <DescriptionGroup>
                            <DescriptionHeading>Ownership History</DescriptionHeading>
                            <Text>{ownershipHistory}</Text>
                        </DescriptionGroup>
                        <DescriptionGroup>
                            <DescriptionHeading>Recent Service History</DescriptionHeading>
                            <Text>{recentServiceHistory}</Text>
                        </DescriptionGroup>
                        {sellerNotes ? (
                            <DescriptionGroup>
                                <DescriptionHeading>Seller Notes</DescriptionHeading>
                                <Text>{sellerNotes}</Text>
                            </DescriptionGroup>
                        ) : null}
                    </CarDescription>
                </CarDetailsBody>
            </CarDetailsPage>
        </>
    );
};

export default ListingDetailsPage;
