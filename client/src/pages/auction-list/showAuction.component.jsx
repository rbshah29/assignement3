/*
    Author: Rutvik Bhavesh Shah rt304004@dal.ca B00934537
*/
import React from "react";
import AuctionList from "./AuctionDisplay";
 
const ShowAuction = () =>
    <div className="projects">
    <h1 className="project_heading" style={{'color':'black'}}>Live Auction</h1>
    <div className="projectList">
    <AuctionList />
    </div>
    </div>
    ;

export default ShowAuction;
