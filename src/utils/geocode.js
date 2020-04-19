const request = require('request')



const geocode =(address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoib2x1d2FzZW5pIiwiYSI6ImNrOHY0c3NlbDBlNmMzZ2xzeHI3d3Joa3YifQ.8TfQ-8SrSYzvliNHrr1C8w"

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback("We were unable to reach the service", undefined )
        }else if(body.features.length === 0){
            callback("Unable to find location. Try another", undefined)
        }
        else{
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })

    
}

module.exports= geocode
