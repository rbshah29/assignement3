/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

const mongoose = require("mongoose");

const config = require("../config");
const { listing } = require("../constants/listingConstants");

const listingSchema = new mongoose.Schema({
    carCompany: {
        type: String,
        required: [true, "Car must belong to a company"],
    },
    carModel: {
        type: String,
        required: [true, "Car must have a model"],
    },
    carMileage: {
        type: Number,
        required: [true, "Mileage is required."],
        min: 0,
    },
    carEngine: {
        type: String,
        required: [true, "Car must have an engine. Please enter a value."],
    },
    vin: {
        type: String,
        unique: true,
        required: [true, "We can't proceed further without getting Vehicle Indentification Number."],
    },
    transmission: {
        type: String,
        enum: ["manual", "automatic"],
        required: [true, "Car must have either manual or automatic transmission. Please enter a value."],
    },
    sellerName: {
        type: String,
        required: [true, "Seller Name is required."],
    },
    location: {
        type: String,
        required: [true, "Location can't be empty. Please enter a value."],
    },
    highlight: {
        type: String,
        required: [true, "You must type something about your car"],
        maxLength: 2100,
    },
    recentServiceHistory: {
        type: String,
        required: [true, "Recent Service History is required."],
        maxLength: 2100,
    },
    ownershipHistory: {
        type: String,
        required: [true, "Ownership History is required."],
        maxLength: 2100,
    },
    sellerNotes: {
        type: String,
        maxLength: 2100,
    },
    status: {
        type: String,
        enum: [listing.status.UNDER_REVIEW, listing.status.APPROVED, listing.status.REJECTED],
        default: listing.status.UNDER_REVIEW,
    },
    auctionStatus: {
        type: String,
        enum: ["live", "done", "closed"]
    },
    images: {
        type: mongoose.Schema.Types.Array,
        default: `${config.SERVER_DOMAIN}/assets/images/cars/car-default.jpg`,
    },
    documents: {
        type: mongoose.Schema.Types.Array,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Listing must be added by a user"],
    },
});

module.exports = mongoose.model("Listing", listingSchema);
