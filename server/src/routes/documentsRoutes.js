/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

const express = require("express");

const { uploadCarDocuments, saveDocumentsToDb, downloadCarDocuments } = require("../controllers/documentController");

const router = express.Router();

router.route("/upload").post(uploadCarDocuments, saveDocumentsToDb);
router.route("/download/:vin").get(downloadCarDocuments);

module.exports = router;
