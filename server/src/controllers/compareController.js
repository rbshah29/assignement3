/*
    Author: Utsavkumar Jayantibhai Italiya - ut437158@dal.ca (B00935447)
*/
const Listing = require("../models/listingModel");
const catchAsync = require("../utils/catchAsync");


const getAllCars = async (req, res) => {
    try {
        const allData = await Listing.find();
        const filteredData = allData.map((car) => ({
            Image: car.images,
            Brand: car.carCompany,
            Model:car.carModel,
            Mileage:car.carMileage,
            Engine:car.carEngine,
            vin:car.vin,
            Transmission:car.transmission,
            Seller:car.sellerName,
            Location:car.location,
            Highlight:car.highlight,
            ServiceHistory:car.recentServiceHistory,
            AuctionStatus:car.auctionStatus,
            SellerNotes:car.sellerNotes,
          }));
        res.status(200).json(
            {
                status: "success",
                cars: filteredData
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}

module.exports = {
    getAllCars
}
