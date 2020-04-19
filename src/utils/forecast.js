
const request = require('request')
const forecast = (long, lat, callback)=>{

    const url = "http://api.weatherstack.com/current?access_key=52edf9017fc7a2729ad059c076fba9e8&query="+lat+","+long

    request({url, json:true},(error, {body})=>{
        if(error){
            callback("Could not connect to the service provider", undefined);
        }else if(body.error){
            callback("Could not find the address, try again", undefined)
        }else{
            const currently= body.current.temperature
            const description = body.current.weather_descriptions[0]
            const feels = body.current.feelslike
            const weatherCode = body.current.weather_code
            const time = body.current.observation_time
            const localtime = body.location.localtime
            const timeZoneId = body.location.timezone_id
            const icons = body.current.weather_icons
            const w_speed = body.current.wind_speed
            const w_degree = body.current.wind_degree
            const w_direction = body.current.wind_direction
            const humidity = body.current.humidity
            const cloud_cover = body.current.cloud_cover
            const day = body.current.is_day
            const visibility = body.current.visibility
            callback(undefined,
                  {description: description+". It is currently "+currently+" degree but, it feels like: "+feels+" degree.",
                  icons:icons,
                  weatherCode,
                  time,
                  localtime,
                  timeZoneId,
                  w_degree, w_speed, w_direction, humidity, cloud_cover, day, visibility
            }
            )
        }
    })

}
module.exports = forecast