// AUTHOR : Dixit Kanubhai Ghodadara (B00913652) | dx343670@dal.ca (Shared)

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { job } = require("./utils/cronjob")

var bodyParser = require('body-parser');

const historyRouter = require("./routes/historyRoutes");

const listingRouter = require("./routes/listingRoutes");
const userRoter = require("./routes/userRouter");
const documentRouter = require("./routes/documentsRoutes");
const globalErrorHandlerMiddleware = require("./controllers/errorController");
const News = require("./models/NewsModel");
const auctionRouter = require("./routes/auctionRoutes");
const compareRouter=require("./routes/compareRoutes");
const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const database = mongoose.connection;

database.on("error", (err) => {
    console.log(err);
});

database.once("connected", () => {
    console.log("===== DATABASE CONNECTION SUCCESSFUL =====");
    job.start();
});

app.use(cors(corsOptions));

// Retrieve all news
app.get("/news", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    try {
        const news = await News.find();
        res.send(news);
    } catch (err) {
        console.error("Error occurred while retrieving news:", err);
        res.status(500).send("Internal server error");
    }
});

app.use(express.static("public"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json())

app.use("/listing", listingRouter);
app.use("/user", userRoter);
app.use("/document", documentRouter);
app.use("/user/history/", historyRouter)
app.use("/auction", auctionRouter)
app.use("/comparecar",compareRouter)

app.use(globalErrorHandlerMiddleware);
app.listen(PORT, () => {
    console.log(`Bid My Ride Server is running on port: ${PORT}`);
});
