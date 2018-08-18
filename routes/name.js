const {Router} = require('express')

const r = new Router();

r.get('/name/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`);
});

module.exports = r;
