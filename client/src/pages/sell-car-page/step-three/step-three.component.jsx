/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React, { useEffect, useState } from "react";
import Button from "../../../components/button/button.component";
import { direction } from "../../../constants/sellCar";
import { ButtonWrapper } from "../step-one/step-one.styles";
import WithFormHandler from "../WithSellCar";
import { Form, Input } from "./stepThree.style";

const emptyDataSet = {
    images: [],
};

const StepThree = ({ switchTab, formData, updateState, onBlur, onInvalid }) => {
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        console.log(formData);
        if (formData.images.length !== 0 && submitForm) {
            switchTab(direction.NEXT, formData);
            setSubmitForm(false);
        }
    }, [submitForm, switchTab, formData]);

    return (
        <>
            <Form
                encType="multipart/form-data"
                id="car-images-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    setSubmitForm(true);
                }}
            >
                <Input
                    type="file"
                    id="images"
                    name="images"
                    accept="image/jpg, image/jpeg, image/png"
                    multiple
                    required
                    onBlur={onBlur}
                    onInvalid={onInvalid}
                    onChange={(e) => {
                        console.log(e.target.files);
                        const form = document.getElementById("car-images-form");
                        const data = new FormData(form);
                        const images = [];
                        for (const [key, value] of data) {
                            console.log(key);
                            // images.push(URL.createObjectURL(value));
                            images.push(value);
                        }

                        updateState("images", images);
                    }}
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
                    <Button type="submit">Continue</Button>
                </ButtonWrapper>
            </Form>
        </>
    );
};

export default WithFormHandler(StepThree, emptyDataSet);
