/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import { Status } from "./ListingStatus.styles";

const ListingStatus = ({ status }) => {
    return <Status status={status}>{status.split("-").join(" ")}</Status>;
};

export default ListingStatus;
