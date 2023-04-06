/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import { useLocation } from "react-router-dom";
import axios from "../../utils/axios";

const { useState } = require("react");

const UploadDocuments = () => {
    const {
        state: { vin, carCompany },
    } = useLocation();

    const [documents, setDocuments] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(documents);

        const { data: response } = await axios.post(
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

        console.log(response);
    };

    return (
        <>
            <h1>Upload Documents</h1>
            <form encType="multipart/form-data" id="car-documents-form" onSubmit={handleSubmit}>
                <input
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
                <button type="submit">SUBMIT</button>
            </form>
        </>
    );
};

export default UploadDocuments;
