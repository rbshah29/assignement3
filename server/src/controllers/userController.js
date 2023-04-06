// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

require("dotenv").config();

const { User } = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware for authentication.
const checkAuth = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token || token == undefined) {
    return res.json({
      status: false,
      message: "No token found",
    });
  }

  try {
    const decode = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({ email: decode.email });

    if (user) {
      req.user = user;
      return next();
    } else {
      return res.json({
        status: false,
        message: "Please log in to access this content.",
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      message: "Something went wrong.",
    });
  }
};

// Signup new user (Store the new user data into mongoDB)
const createNewUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const addUser = async () => {
    try {
      const newPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: newPassword,
        role: "user",
      });

      const token = jwt.sign(
        {
          email: newUser.email,
        },
        SECRET_KEY
      );
      res.json({
        status: true,
        message: "New user is added suceesfully.",
        token,
        user: newUser,
      });
    } catch (error) {
      res.status(200).json({
        status: false,
        message:
          "This email address is already registered. Please try with a different email address.",
      });
    }
  };

  addUser();
};

// Login (check the user email and password from mongoDB.)
const validateUser = (req, res, next) => {
  const { email, password } = req.body;

  const checkUser = async () => {
    try {
      const findUser = await User.findOne({ email: email }).select("+password");

      if (!findUser) {
        return res.status(404).json({
          status: false,
          message: "User is not found",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, findUser.password);

      if (isPasswordValid) {
        const userInfo = await User.findOne({ email: findUser.email });

        const token = jwt.sign(
          {
            email: findUser.email,
          },
          SECRET_KEY
        );
        res.status(200).json({
          status: true,
          message: "User is valid to login",
          token,
          user: userInfo,
        });
      } else {
        res.status(404).json({
          status: false,
          message: "password is invalide.",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: false,
        message: "Something went wrong.",
      });
    }
  };

  checkUser();
};

//forget Password ( User can change their password using valid emailID. )
const forgotpassword = (req, res, next) => {
  const { email, password } = req.body;

  const updatePassword = async () => {
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      return res.status(404).json({
        status: false,
        message: "User is not found",
      });
    }

    const newPassword = await bcrypt.hash(password, 10);

    await User.updateOne(
      { email: findUser.email },
      { $set: { password: newPassword } }
    );
    return res.status(200).json({
      status: true,
      message: "your password is sucessfully updated.",
    });
  };

  updatePassword();
};

// User ( User info get )
const getprofile = (req, res, next) => {
  const findUser = req.user;
  res.status(200).json({
    status: true,
    user: findUser,
  });
};

// Update user ( User profile update ).
const updateProfile = (req, res, next) => {
  const userData = req.user;
  const { firstName, lastName, email, password } = req.body;

  if (userData.email != email) {
  }

  const updateUser = async () => {
    try {
      if (userData.email != email) {
        const alreadyUser = await User.findOne({ email });
        if (alreadyUser) {
          res.status(200).json({
            userUpdate: false,
            message:
              "This email address is already registered. Please try with a different email address.",
          });
        }
      }

      if (password == "" || password == undefined) {
        await User.updateOne(
          { email: userData.email },
          { firstName, lastName, email }
        );

        const newuser = await User.findOne({ email });

        const newToken = jwt.sign(
          {
            email: newuser.email,
          },
          SECRET_KEY
        );
        res.json({
          status: true,
          message:
            "Your profile has been updated successfully without password change.",
          newToken: newToken,
        });
      } else {
        const newPassword = await bcrypt.hash(password, 10);
        await User.updateOne(
          { email: userData.email },
          { firstName, lastName, email, password: newPassword }
        );
        const newuser = await User.findOne({ email });

        const newToken = jwt.sign(
          {
            email: newuser.email,
          },
          SECRET_KEY
        );
        res.json({
          status: true,
          message: "Your profile has been updated successfully",
          newToken: newToken,
        });
      }
    } catch (error) {
      res.status(200).json({
        userUpdate: false,
        message:
          "This email address is already registered. Please try with a different email address.",
      });
    }
  };

  updateUser();
};

const checkUser = (req, res, next) => {
  userData = req.user;
  res.status(200).json({
    status: true,
    user: userData,
  });
};

//delete user ( Delete user from the monfoDB )
const deleteaccount = (req, res, next) => {
  const user = req.user;

  const deleteUser = async () => {
    try {
      await User.findOneAndRemove({ email: user.email });
      const findUser = await User.findOne({ email: user.email });

      if (!findUser) {
        res.status(200).json({
          status: true,
          message: "account deleted sucssefully.",
        });
      } else {
        res.json(400).json({
          status: false,
          message: "somthinf went wrong",
        });
      }
    } catch (error) {}
  };

  deleteUser();
};

module.exports = {
  createNewUser,
  validateUser,
  forgotpassword,
  checkAuth,
  getprofile,
  updateProfile,
  checkUser,
  deleteaccount,
};
