const request = require('request');


let apiKey = '5d7eba6323b944872625fff10054842b';
let city = 'minneapolis';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`



request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        // console.log('body:', body);
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }

});

