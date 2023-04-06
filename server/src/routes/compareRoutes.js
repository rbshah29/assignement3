/*
    Author: Utsavkumar Jayantibhai Italiya - ut437158@dal.ca (B00935447)
*/
const express = require("express");
const { getAllCars } = require("../controllers/compareController");
const router = express.Router();
router.route("/compare").get(getAllCars);
module.exports = router;
