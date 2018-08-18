const express = require('express');

const mwLogger = require('./middleware/logger');
const mwAuth = require('./middleware/auth');
const routerName = require('./routes/name');
const routerAPI = require('./routes/api');

const app = express();


// ------------------------------------------------------------ Using middleware

app.use(mwLogger);
app.use(routerName);
app.use('/api/', mwAuth, routerAPI);



const PORT = 8000;
app.listen(PORT);
console.log(`App listening on port ${PORT}`);
