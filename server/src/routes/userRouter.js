// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

const express = require("express");

const controllers = require("../controllers/userController");

const router = express.Router();

router.route("/signup").post(controllers.createNewUser);
router.route("/login").post(controllers.validateUser);
router.route("/forgotpassword").post(controllers.forgotpassword);
router
  .route("/updateprofile")
  .get(controllers.checkAuth, controllers.getprofile)
  .post(controllers.checkAuth, controllers.updateProfile);
router.route("/checkUser").get(controllers.checkAuth, controllers.checkUser);
router.route("/delete").post(controllers.checkAuth, controllers.deleteaccount);

module.exports = router;
