'use strict';

const express = require('express')
const app = express();
const obj = require("./getObjectsFromImg");


//TODO: Get food from image via azure cognitive service.
app.get('/', (req, res) => {
  obj.getFoods(req.query.img, res);
})

// app.post('/', function (req, res) {
//   var data = obj.getFoods();
//   res.send(data);
// })

//starts application.
app.listen(3000, () => {

  var fs = require('fs');

  fs.readFile('logo.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });

  console.log('APP listening on port 3000!')
})


