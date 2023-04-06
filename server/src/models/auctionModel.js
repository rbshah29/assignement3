/*
    Author: Rutvik Bhavesh Shah rt304004@dal.ca B00934537
*/
const mongoose = require('mongoose');
const config = require("../config");

function generateUniqueId() {
  const timestamp = new Date().getTime();
  return `AUC${timestamp}`;
}

const auctionSchema = new mongoose.Schema({
  _id: { type: String, default: () => generateUniqueId() },
  carName: { type: String, required: true },
  carDetails: { type: String, required: true },
  carCompany: {type:String},
  modelYear: { type: String },
  carMilage: { type: Number, integer: true, required: true },
  images: {
    type: mongoose.Schema.Types.Array,
    default: `${config.SERVER_DOMAIN}/assets/images/cars/car-default.jpg`,
},
userID:{
    type:String
},
auctionStatus: {
  type: String,
  enum: ['live', 'closed', 'done'],
  default: 'live'
},
historyCreated:{
  type: Boolean,
  default: false
},
transactionType:{
type: String,
enum: ['sell','buy'],
},
  bidingAmount: { type: Number, integer: true, required: true },
});

const auctionModel = mongoose.model('auction', auctionSchema);

module.exports = { auctionModel };