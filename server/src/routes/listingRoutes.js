/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

const express = require("express");

const {
    addSellCarRequest,
    uploadCarImages,
    getAllCar,
    getCarDetails,
    deleteCarListing,
    changeListingStatus,
    updateFavorite,
    updateCarListing,
} = require("../controllers/listingController");
const { listing } = require("../constants/listingConstants");

const { checkAuth } = require("../controllers/userController");

const router = express.Router();

router.use(checkAuth);

router.route("/").post(uploadCarImages, addSellCarRequest).get(getAllCar);
router.route("/:vin").get(getCarDetails).delete(deleteCarListing).put(updateCarListing);
router.route("/approve/:vin").put(changeListingStatus(listing.status.APPROVED));
router.route("/reject/:vin").put(changeListingStatus(listing.status.REJECTED));
router.route("/favorite/:vin").post(updateFavorite);

module.exports = router;
