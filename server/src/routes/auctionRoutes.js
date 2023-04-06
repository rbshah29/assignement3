/*
    Author: Rutvik Bhavesh Shah rt304004@dal.ca B00934537
*/
const auctionController = require("../controllers/auctionController")
const express = require("express")
const router = express.Router();

router.post("/createAuction", auctionController.createAuction)
router.get("/getAuction",auctionController.getAuctions)
router.put("/updateAuction",auctionController.updateAuction)


module.exports = router