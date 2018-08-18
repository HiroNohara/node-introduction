const {Router} = require('express')

const r = new Router();

r.get('/users', (req, res) => {
    res.json([
        {id: 123, name: 'George'},
        {id: 456, name: 'Sally'},
    ]);
});

module.exports = r;
