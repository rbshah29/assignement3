/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import path from "../../constants/paths";

import Tabs from "../../components/Tabs/Tabs.component";
import { direction } from "../../constants/sellCar";
import "./sell-car-page.styles.scss";
import StepOne from "./step-one/StepOne.component";
import StepTwo from "./step-two/step-two.component";
import StepThree from "./step-three/step-three.component";
import { addCarDetails } from "../../redux/car-listing/carListing.reducers";
import axios from "../../utils/axios";
import { IconWrapper } from "../listing-details-page/listingDetailsPage.styles";
import { ReactComponent as BackArrow } from "../../assets/back-arrow.svg";

const SellCarPage = ({ initialCarData = {}, action = "add" }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tabs = useMemo(() => (action === "update" ? ["tabOne", "tabTwo"] : ["tabOne", "tabTwo", "tabThree"]), [action]);
    console.log(tabs);

    const initialUserData = tabs.reduce((initialState, tab) => {
        initialState[tab] = Object.keys(initialCarData).length !== 0 ? initialCarData[tab] : {};
        return initialState;
    }, {});
    const [userData, setUserData] = useState(initialUserData);

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            (async function () {
                console.log(userData);
                const dataToStore = tabs.reduce((accumulator, tab) => {
                    return { ...accumulator, ...userData[tab] };
                }, {});

                console.log(dataToStore);
                let response;

                if (action === "add") {
                    response = await axios.post(
                        "/listing",
                        {
                            ...dataToStore,
                            images: dataToStore.images,
                        },
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                                "x-access-token": localStorage.getItem("token"),
                            },
                        }
                    );

                    // dispatch(addCarDetails(response.data.car));
                }

                if (action === "update") {
                    console.log("CALL UPDATE METHOD HERE");
                    response = await axios.put(`/listing/${dataToStore.vin}`, dataToStore, {
                        headers: {
                            "x-access-token": localStorage.getItem("token"),
                        },
                    });
                    console.log(response.data.car);
                }

                dispatch(addCarDetails(response.data.car));
                navigate(path.NEW_LISTINGS);
                setSubmitForm(false);
            })();
        }
    }, [submitForm, dispatch, navigate, tabs, userData, action]);

    const handleTabSwitch = (dir, data) => {
        let nextTab;

        if (dir === direction.PREVIOUS && tabs[0] === activeTab) {
            return;
        } else if (dir === direction.NEXT && tabs[tabs.length - 1] === activeTab) {
            setUserData((prevState) => ({
                ...prevState,
                [activeTab]: data,
            }));

            setSubmitForm(true);
            return;
        }

        tabs.forEach((tab, i) => {
            if (activeTab === tab) {
                if (dir === direction.NEXT) {
                    setUserData((prevState) => ({
                        ...prevState,
                        [activeTab]: data,
                    }));
                    nextTab = tabs[i + 1];
                }
                if (dir === direction.PREVIOUS) {
                    nextTab = tabs[i - 1];
                    setUserData((prevState) => ({
                        ...prevState,
                        [activeTab]: data,
                    }));
                }
                return;
            }
        });

        setActiveTab(nextTab);
    };
    return (
        <div className="sell-car-page">
            <Tabs active={activeTab}>
                <div name="tabOne">
                    {action === "update" ? (
                        <Link to={`${path.NEW_LISTINGS}/${initialCarData?.tabOne?.vin}`}>
                            <IconWrapper>
                                <BackArrow />
                            </IconWrapper>
                        </Link>
                    ) : null}

                    <h1 className="form-heading">Car Details</h1>
                    <StepOne switchTab={handleTabSwitch} initialData={userData["tabOne"]} action={action} />
                </div>
                <div name="tabTwo">
                    <h1>Seller and Car History</h1>
                    <StepTwo switchTab={handleTabSwitch} initialData={userData["tabTwo"]} />
                </div>
                {action === "add" ? (
                    <div name="tabThree">
                        <h1>Upload Car Images</h1>
                        <StepThree switchTab={handleTabSwitch} initialData={userData["tabThree"]} />
                    </div>
                ) : null}
            </Tabs>
        </div>
    );
};

export default SellCarPage;
