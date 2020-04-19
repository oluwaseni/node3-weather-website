const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

//define path for express config
const filePath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handle bars (hbs) engine and views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup the routes static directories to work 
app.use(express.static(filePath))

app.get('', (req, res)=>{
    res.render('index',{
        title: "Forecast",
        name:'Oluwaseni: 08185184003'
    })
})

app.get('/index', (req, res)=>{
    res.render('index',{
        title: "Forecast",
        name:'Oluwaseni: 08185184003'
    })
})
app.get('/about', (req, res)=>{
    res.render('about',{
        title: "About the App",
        name:'Oluwaseni: 08185184003'
    })
})
app.get('/help', (req, res)=>{
    res.render('help',{
        title: "FAQ",
        message:'We all need God\s help! ',
        name:'Oluwaseni: 08185184003'
    })
})



app.get('/weather', (req, res)=>{
    address = req.query.address
    if(!req.query.address){
        return res.send({
            error: 'You need to provide an address'
        })
    }
    geoCode(address,(error, {latitude,longitude,location}={})=>{
        if(error){
            return res.send({
                error:error})
        }
        else if(address == undefined){
            return res.send({
                error:"Please provide a location. e.g: Nevada"})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({
                    error:error})
            }

            
            res.send({
                location:location,
                forecast:forecastData.description,
                icon:forecastData.icons,
                weatherCode:forecastData.weatherCode,
                localtime:forecastData.localtime,
                w_degree:forecastData.w_degree,
                w_speed:forecastData.w_speed,
                w_direction:forecastData.w_direction,
                humidity:forecastData.humidity,
                cloud_cover:forecastData.cloud_cover,
                day:forecastData.day,
                currently:forecastData.currently,
                visibility:forecastData.visibility,
                latitude:latitude,
                longitude:longitude,
                address: req.query.address
            })
          })
    })

})


app.get('/products', (req, res)=>{

    if(!req.query.search){
        return res.send({
            error: 'You need to include a search category'})
    }

    console.log(req.query.search)
    res.send({
        products: []
    })

})

app.get('/help/*', (req,res)=>{
    res.render('404',{
        message: 'page not found',
        title: 'Help Not found',
        name:'Oluwaseni: 08185184003'
    })

})

app.get('*', (req, res)=>{
    res.render('404',{
        title: 'None found',
        message:'page not found',
        name:'Oluwaseni: 08185184003'
    })
})



app.listen(port, ()=>{
    console.log('Server is up on port '+port)
})