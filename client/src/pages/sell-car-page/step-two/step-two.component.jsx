/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React from "react";
import WithFormHandler from "../WithSellCar";
import TextArea from "../../../components/textarea/textarea.component";
import { ButtonWrapper, Form } from "../step-one/step-one.styles";
import { direction } from "../../../constants/sellCar";
import InputField from "../../../components/input-field/input-field.component";
import Button from "../../../components/button/button.component";

const emptyDataSet = {
    sellerName: "",
    location: "",
    highlight: "",
    recentServiceHistory: "",
    ownershipHistory: "",
    sellerNotes: "",
};

const StepTwo = ({ switchTab, formData, errorMessage, handleOnChange, handleSubmit, onInvalid, onBlur }) => {
    const { sellerName, location, highlight, recentServiceHistory, ownershipHistory, sellerNotes } = formData;
    const {
        sellerName: sellerNameError,
        location: locationError,
        highlight: highlightError,
        recentServiceHistory: recentServiceHistoryError,
        ownershipHistory: ownershipHistoryError,
        sellerNotes: sellerNotesError,
    } = errorMessage;

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <InputField
                label="Seller Name"
                type="text"
                id="sellerName"
                name="sellerName"
                value={sellerName}
                error={sellerNameError}
                handleOnChange={handleOnChange}
                required
                onInvalid={onInvalid}
                onBlur={onBlur}
                pattern="^[a-zA-Z\s]*$"
                title="Please enter only letters"
            />
            <InputField
                label="Location"
                type="text"
                id="location"
                name="location"
                value={location}
                error={locationError}
                onChange={handleOnChange}
                required
                onInvalid={onInvalid}
                onBlur={onBlur}
                pattern="^[a-zA-Z\s]*$"
                title="Please enter only letters"
            />
            <TextArea
                id="highlights"
                name="highlight"
                rows="6"
                value={highlight}
                label="Highlight"
                onChange={handleOnChange}
                error={highlightError}
                required
                maxLength={1800}
                onInvalid={onInvalid}
                onBlur={onBlur}
            />
            <TextArea
                label="Recent Service History"
                id="recentServiceHistory"
                name="recentServiceHistory"
                rows="6"
                value={recentServiceHistory}
                error={recentServiceHistoryError}
                onChange={handleOnChange}
                required
                maxLength={1800}
                onInvalid={onInvalid}
                onBlur={onBlur}
            />
            <TextArea
                label="Ownership History"
                id="ownershipHistory"
                name="ownershipHistory"
                rows="6"
                value={ownershipHistory}
                error={ownershipHistoryError}
                onChange={handleOnChange}
                required
                maxLength={1800}
                onInvalid={onInvalid}
                onBlur={onBlur}
            />
            <TextArea
                label="Seller Notes"
                id="sellerNotes"
                name="sellerNotes"
                rows="6"
                value={sellerNotes}
                error={sellerNotesError}
                onChange={handleOnChange}
                maxLength={1800}
                onInvalid={onInvalid}
                onBlur={onBlur}
            />
            <ButtonWrapper>
                <Button
                    type="button"
                    onClick={() => {
                        switchTab(direction.PREVIOUS, formData);
                    }}
                >
                    Previous
                </Button>
                <Button type="=submit">Continue</Button>
            </ButtonWrapper>
        </Form>
    );
};

export default WithFormHandler(StepTwo, emptyDataSet);
