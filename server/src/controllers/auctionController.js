/*
    Author: Rutvik Bhavesh Shah rt304004@dal.ca B00934537
*/
const { auctionModel } = require("../models/auctionModel")
const listingModel = require("../models/listingModel")
// create new auction for cars
const createAuction = (req, res) => {
  let resp = auctionModel.create(req.body)
  res.json({ message: "Done" })
}

const getAuctions = (req, res) => {
  let filter = {};
  if (req.query.filter) {
    filter = JSON.parse(req.query.filter);
  }

  auctionModel.find(filter)
    .then((auctions) => {
      res.status(200).json({ success: true, data: auctions });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

const updateAuction = async (req, res) => {
    console.log(req.body);
    let resp = await auctionModel.findByIdAndUpdate(req.body._id, { $set: { ...req.body } });
    console.log(resp);
    res.json({ message: "Done" })
  }
  

const getApprovedListings = async () => {
  let filter = { "status": "approved", auctionStatus: null }

  let approvedListings = await listingModel.find(filter)
  let auctionListings = []
  approvedListings.map(async listing => {
    let auction = {}
    auction.carName = listing.carCompany + " " + listing.carModel;

    //mappings
    auction.carDetails = listing.highlight + " " + listing.ownershipHistory;
    auction.carMilage = listing.carMileage;
    auction.bidingAmount = 15000;
    auction.images = listing.images;
    auction.carCompany = listing.carCompany;
    auction.modelYear = listing.carModel;
    auction.userID = listing.userId;
    auction.transactionType = 'sell';
    auctionListings.push(auction)
    await listingModel.findByIdAndUpdate(listing._id, {$set: {auctionStatus: "live"}})
  })
  await auctionModel.create(auctionListings)

}

module.exports = { createAuction, getAuctions, getApprovedListings, updateAuction };;
