const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const csvtojsonV2 = require("csvtojson");


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

const csv_path = './clean.csv';


// pass the app on to the routes
app.get('/', (req, res) => {
    csvtojsonV2()
        .fromFile(csv_path)
        .then((data) => {
            res.send(data);
        });
});

// error handlers
app.get('*', function (req, res, next) {
    let err = new Error('Page not found.');
    err.statusCode = 404;
    err.shouldRedirect = true; //new property on err so that our middleware will redirect
    next(err);
});

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'DEVELOPMENT' ? err : {};

    // render the error page
    res.status(err.statusCode || 500);
    res.render('error.ejs', { err, });
});

module.exports = app;