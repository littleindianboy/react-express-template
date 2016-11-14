const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const bodyParser = require('body-parser');
const indexPath = path.join(__dirname, '../www/index.html');

const request = require('request');
const publicPath = express.static(path.join(__dirname, '../dist/'));

app.use(require('morgan')('dev')); // log every request to the console


var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');


const webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);

// // Webpack Hot Reload
app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler)); // And this line

// set port
app.set('port', (process.env.PORT || 3000));

app.use('/api', (req, res) => {
   res.send("hi");
})


// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));

// app.use('/api/email', email);
// app.use('/ballot', router);

require("babel-register");
// app.get('/', require('./server-render-index'));
app.get('*', function(req, res) {
   console.log("sending index");
   res.sendFile(indexPath);
});

http.listen(app.get('port'), () => {
  console.log('RUNNING.');
});
