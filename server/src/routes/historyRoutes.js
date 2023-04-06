const historyController = require("../controllers/historyController")
const userController = require("../controllers/userController");
const express = require("express")
const router = express.Router();

router.post("/create", userController.checkAuth, historyController.createHistory)
router.get("/:userId", userController.checkAuth, historyController.getAllHistoryForUser)
router.put("/update/:historyId", userController.checkAuth, historyController.updateHistory)
router.delete("/remove/:historyId", userController.checkAuth, historyController.removeHistory)

module.exports = router

