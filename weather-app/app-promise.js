const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a: {
            demand: true, // Makes sure that the argumaent is required
            alias: 'address',
            describe: 'Address to get weather',
            string: true // Sets the type to always be a string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/266e469af60e7e0942c0efdb739bead9/${lat},${lng}`

    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherURL);
}).then((response) => {
    let temp = response.data.currently.temperature;
    let realFeel = response.data.currently.apparentTemperature;
    console.log(temp);
    console.log(realFeel);
}).catch((e) => {
    if (e.code === 'ECONNREFUSED') {
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
});
