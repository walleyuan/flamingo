const request = require('request');
const subscriptionKey = 'a9fc00a9da564b1daca9ea2d0a5b1ca9'; //'fe78359472384122a8b8f32ab47d5dac';
const uriBase ='https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/745eb213-ed6c-4878-ae88-a956aaebe309/url?iterationId=5af6f4b5-66d7-484a-9c88-55f637b03db4'; // 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';
//const filterFood = require("./filterFood");

const getFoodFromImageUrl = function(img, res) {

    const imageUrl = img;
    const params = {
        'visualFeatures': 'Categories,Description,Color,Tags',
        'details': '',
        'language': 'en'
    };

    // const options = {
    //     uri: uriBase,
    //     qs: params,
    //     body: '{"url": ' + '"' + imageUrl + '"}',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Ocp-Apim-Subscription-Key': subscriptionKey
    //     }
    // };

    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Prediction-Key': subscriptionKey
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