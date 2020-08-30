const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6fe4dd11fca10b4350b9b56f4c112b76&query=' + encodeURIComponent(latitude) +','+ encodeURIComponent(longitude);
    console.log(url);
    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services',undefined); 
        }
        else if(body.error){
            callback('long lat error',undefined)
        }
        else{
            const data = body.current.weather_descriptions[0] + '. its currently ' + body.current.temperature + ' degrees celcius out. There is a ' +body.current.precip+ '% chance of rain.';
            callback(undefined, data)
        }
    })
}

module.exports = forecast