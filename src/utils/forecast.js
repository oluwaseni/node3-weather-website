
const request = require('request')
const forecast = (long, lat, callback)=>{

    const url = "http://api.weatherstack.com/current?access_key=52edf9017fc7a2729ad059c076fba9e8&query="+lat+","+long+"&units=s"

    request({url, json:true},(error, {body})=>{
        if(error){
            callback("Could not connect to the service provider", undefined);
        }else if(body.error){
            callback("Could not find the address, try again", undefined)
        }else{
            const currently= body.current.temperature
            const description = body.current.weather_descriptions[0]
            const feels = body.current.feelslike
            callback(undefined,
                   description+". It is currently "+currently+" degree kevin but, it feels like: "+feels+" degree kevin"
            )
        }
    })

}
module.exports = forecast