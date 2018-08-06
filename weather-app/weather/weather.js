const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/266e469af60e7e0942c0efdb739bead9/${lat},${lng}`,
        json: true
    }, (error, response, body) => {

        if(error) {
            callback('Unable to connect');
        } else if (response.statusCode === 400) {
            callback('Cannot find address');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                currentTemp: body.currently.temperature,
                realFeel: body.currently.apparentTemperature
            });
        }

    });
}

module.exports = {
    getWeather
}
