const request = require('request');
const subscriptionKey = 'fe78359472384122a8b8f32ab47d5dac';
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';
// const filterFood = require("./filterFood");

const getFoodFromImageUrl = function(img, res) {

    const imageUrl = img;
    const params = {
        'visualFeatures': 'Categories,Description,Color,Tags',
        'details': '',
        'language': 'en'
    };

    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    };
   
    request.post(options, (error, response, body) => {
        if (error) {
            console.log('Error: ', error);
            return;
        }
        // const filterFood = description
        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');

        res.send(body);
    });
};

module.exports = getFoodFromImageUrl;