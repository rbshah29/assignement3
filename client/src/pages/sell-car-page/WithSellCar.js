/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import { useState } from "react";
import { direction } from "../../constants/sellCar";

const WithFormHandler = (WrappedComponent, emptyDataSet) => {
    const NewComponent = ({ switchTab, initialData, ...restProps }) => {
        const INITIAL_STATE = Object.keys(initialData).length === 0 ? emptyDataSet : initialData;

        const [formData, setFormData] = useState(INITIAL_STATE);
        const [errorMessage, setErrorMessage] = useState(emptyDataSet);

        const handleOnChange = (e) => {
            const { name, value } = e.target;

            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        };

        const updateErrorState = (value) => {
            setErrorMessage((prevState) => ({
                ...prevState,
                ...value,
            }));
        };

        const onInvalid = (e) => {
            const { name, validationMessage } = e.target;
            let errorMessage = validationMessage === "Please match the format requested." ? e.target.getAttribute("title") : validationMessage;
            updateErrorState({ [name]: errorMessage });
        };

        const onBlur = (e) => {
            const { name, validationMessage } = e.target;

            const isValid = e.target.checkValidity();
            console.log(validationMessage);

            if (!isValid) {
                let errorMessage = validationMessage === "Please match the format requested." ? e.target.getAttribute("title") : validationMessage;
                updateErrorState({ [name]: errorMessage });
            } else {
                updateErrorState({ [name]: "" });
            }
        };

        const updateState = (key, data) => {
            setFormData((prevState) => {
                return {
                    [key]: data,
                };
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            const target = e.target;
            const isValid = target.checkValidity();

            if (isValid) {
                switchTab(direction.NEXT, formData);
            }
        };

        return (
            <WrappedComponent
                switchTab={switchTab}
                formData={formData}
                errorMessage={errorMessage}
                handleOnChange={handleOnChange}
                handleSubmit={handleSubmit}
                updateState={updateState}
                setErrorMessage={setErrorMessage}
                onInvalid={onInvalid}
                onBlur={onBlur}
                {...restProps}
            />
        );
    };

    return NewComponent;
};

export default WithFormHandler;
