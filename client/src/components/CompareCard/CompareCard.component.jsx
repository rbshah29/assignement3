/*
    Author: Utsavkumar Jayantibhai Italiya - ut437158@dal.ca (B00935447)
*/
import React, { useState } from "react";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";
import { ReactComponent as EngineIcon } from "../../assets/engine.svg";
import { ReactComponent as TransmissionIcon } from "../../assets/transmission.svg";
import { useNavigate } from "react-router-dom";
import path from "../../constants/paths";

import {
    CardBody,
    CardButton,
    CardHeader,
    CardProperties,
    CardProperty,
    CardSubTitle,
    CardTitle,
} from "./CompareCard.styles";
import { useDispatch, useSelector } from "react-redux";
import "./CompareCard.css";
import { addCompareCar, removeCompareCar } from "../../redux/compare-cars/carCompare.reducers";

const CompareCard = ({ car }) => {
    const compareCar = useSelector((state) => state.carCompare.compareCars);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
    const {
        Brand,
        Model,
        vin,
        Mileage,
        Location,
        Engine,
        Image,
        Transmission,
    } = car;
    return (
        <div className="compareCard">
            <div className="cardTopImage">
                <img src={Image[0]} className="topImage" alt="" />
            </div>
            <CardBody>
                <CardHeader>
                    <CardTitle>{`${Brand} ${Model}`}</CardTitle>
                    <CardSubTitle>{vin}</CardSubTitle>
                </CardHeader>
                <CardProperties>
                    <CardProperty>
                        <EngineIcon />
                        <span>{Mileage}</span>
                    </CardProperty>
                    <CardProperty>
                        <LocationIcon />
                        <span>{Location}</span>
                    </CardProperty>
                    <CardProperty>
                        <TransmissionIcon />
                        <span>{Transmission}</span>
                    </CardProperty>
                    <CardProperty>
                        <EngineIcon />
                        <span>{Engine}</span>
                    </CardProperty>
                </CardProperties>
            </CardBody>
            <CardButton
                onClick={() => {
                    if(!isAdded)
                    {
                        dispatch(addCompareCar(vin));
                        setIsAdded(!isAdded);
                        console.log(compareCar.length);
                        if (compareCar.length === 1) {
                            navigate(path.LIST_COMPARISION);
                        }
                    }
                    else{
                        dispatch(removeCompareCar(vin));
                        setIsAdded(!isAdded);
                        console.log(compareCar.length);
                    }
                   
                }}
            >
            {isAdded ? 'Remove' : 'Add'}
                
            </CardButton>
        </div>
    );
};

export default CompareCard;
