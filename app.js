const express = require('express');
const app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

app.use('/', express.static(__dirname + '/frontend/dist'));



var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server Online');
});

