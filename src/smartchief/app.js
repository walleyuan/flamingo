const express = require('express')
const app = express();
const obj = require("./getObjectsFromImg");



app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
    var data = obj.getFoods();
    res.send(data);
  })

app.listen(3000, () => console.log('Example app listening on port 3000!'))


