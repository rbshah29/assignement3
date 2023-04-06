/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React from "react";
import { useState } from "react";
import InputField from "../../../components/input-field/input-field.component";

import { direction } from "../../../constants/sellCar";

const StepOne = ({ switchTab, initialData, action }) => {
    const emptyDataSet = {
        carCompany: "",
        carModel: "",
        carMileage: "",
        carEngine: "",
        vin: "",
    };
    const INITIAL_STATE = Object.keys(initialData).length === 0 ? emptyDataSet : initialData;

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [errorMessage, setErrorMessage] = useState(emptyDataSet);

    const { carCompany, carModel, carMileage, carEngine, vin } = formData;
    const { carCompany: carCompanyError, carModel: carModelError, carMileage: carMileageError, carEngine: carEngineError, vin: vinError } = errorMessage;

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const target = e.target;
        const isValid = target.checkValidity();

        if (isValid) {
            switchTab(direction.NEXT, formData);
        }
    };

    console.log(action === "update");

    return (
        <form onSubmit={handleSubmit} noValidate>
            <InputField label="Car Company" type="text" id="carCompany" name="carCompany" value={carCompany} error={carCompanyError} handleOnChange={handleOnChange} required />
            <InputField label="Car Model" type="text" id="car-model" name="carModel" value={carModel} error={carModelError} handleOnChange={handleOnChange} required />
            <InputField label="Car Mileage" type="number" id="car-mileage" name="carMileage" value={carMileage} error={carMileageError} handleOnChange={handleOnChange} required />
            <InputField label="Car Engine" type="text" id="car-engine" name="carEngine" value={carEngine} error={carEngineError} handleOnChange={handleOnChange} required />
            <InputField
                disabled={action !== "update"}
                label="Vehicle Identification Number (VIN)"
                type="text"
                id="vin"
                name="vin"
                value={vin}
                error={vinError}
                handleOnChange={handleOnChange}
                required
            />
            <button
                type="button"
                onClick={() => {
                    switchTab(direction.PREVIOUS, formData);
                }}
            >
                Previous
            </button>
            <button type="=submit">Continue</button>
        </form>
    );
};

export default StepOne;
