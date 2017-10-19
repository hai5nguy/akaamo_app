const express = require('express');
const app = express();
const server = require('./backend/server');
const apiWorker = require('./backend/apiWorker');
const accessKey = process.env.WILDAPRICOT_ACCESSKEY;

app.use('/api', server(apiWorker(accessKey)).serve);
app.use('/', express.static(__dirname + '/frontend/dist'));

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server Online');
});
