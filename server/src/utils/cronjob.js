const CronJob  = require('cron').CronJob
const auctionController = require("../controllers/auctionController")
const historyController = require("../controllers/historyController")


module.exports.job = new CronJob(
    process.env.CRON || "*/1  * * * *",
    async ()=>{
        console.log("*****Starting Cron Job*****")
        console.log("1. Get Approved Listings for Auctions.")
        await auctionController.getApprovedListings();
        console.log("2. Get Completed Auctions for User's Transaction History.")
        setInterval(await historyController.getAllCompletedAuctions, 5000)
        console.log("*****Finished Cron Job*****")
    },
    null,
    true
);
