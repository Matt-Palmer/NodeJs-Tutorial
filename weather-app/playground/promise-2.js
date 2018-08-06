const request = require('request');

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
}

geocodeAddress('LU2 8QA').then((location) => {
    console.log(JSON.stringify(location, undefined, 4));
}, (errorMessage) => {
    console.log(errorMessage);
});