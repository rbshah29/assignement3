/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

const AppError = require("../utils/appError");

const handleValidationError = (err) => {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Invalid input data. ${errors.join(". ")}`;
    return new AppError(message, 400);
};

const handleDuplicateFieldsDb = (err) => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value: ${value}`;
    return new AppError(message, 400);
};

const handleTokenExpiredError = (err) => {
    return new AppError("Your token has expired. Login again", 401);
};

const handleInvalidTokenError = (err) => {
    return new AppError("Token is invalid.", 401);
};

const sendErrorResponse = (err, req, res) => {
    if (err?.isOperational) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }

    return res.status(500).json({
        status: "error",
        message: "Something went wrong !!",
    });
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    let error = { ...err };
    error.message = err.message;

    console.log(err);

    if (err.code == 11000) error = handleDuplicateFieldsDb(err);
    if (err.name == "ValidationError") error = handleValidationError(err);
    if (err.name == "TokenExpiredError") error = handleTokenExpiredError(err);
    if (err.name == "JsonWebTokenError") error = handleInvalidTokenError(err);

    sendErrorResponse(error, req, res);
};
