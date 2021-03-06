'use strict';

const express = require('express')
const app = express();
const getFoodFromImageUrl = require("./src/getFoodFromImageUrl");

var path = require('path')
var serveStatic = require('serve-static')

var cors = require('cors');
app.use(cors());


//TODO: Get food from image via azure cognitive service.
//-----------------------------------------------------------------------
//Demo
//[1] https://www.freeimageslive.co.uk/files/images009/apple.preview.jpg
//-----------------------------------------------------------------------
app.get('/', (req, res) => {
  console.log(req.query.img);
  getFoodFromImageUrl(req.query.img, res);
})

//starts application.
app.use(serveStatic(path.join(__dirname, 'assets')))
app.listen(3000, () => {

  var fs = require('fs');

  fs.readFile('logo.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
  console.log('APP listening on port 3000!')
})


