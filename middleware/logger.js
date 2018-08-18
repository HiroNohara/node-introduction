// Logger
module.exports = (request, response, next) => {
    console.log(`Requested url ${request.method} ${request.url}`);
    next();
};
