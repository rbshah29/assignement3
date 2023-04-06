/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

module.exports = catchAsync;
