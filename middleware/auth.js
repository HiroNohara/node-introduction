// Checks the 'Authorization' header for the right token
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token !== 'secret') {
        res.send('You are not authenticated')
    } else next();
}
