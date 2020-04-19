// const { response } = require("express")

// const { response } = require("express")

night = '/images/download.jfif'
console.log("Working")
const url = 'http://localhost:3000/weather?address=lagos'

const weatherForm = document.querySelector('form')
const imge = document.querySelector('img')
const searchValue = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
// const localTime = document.querySelector('#localTime')
const w_degree = document.querySelector('#w_degree')
const w_speed = document.querySelector('#w_speed')
const humidity = document.querySelector('#humidity')
const day = document.querySelector('#day')
const visibility = document.querySelector('#visibility')
const temp = document.querySelector('#temp')
// const body = document.querySelector('body').style.backgroundImage.url

// localTime.textContent= data.localtime
const long = document.querySelector('#long')
const lat = document.querySelector('#lat')

// const box = document.getElementById('box1').style.display="block"

/

// messageOne.textContent = '...'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const valu = searchValue.value
    fetch('/weather?address='+valu).then((response)=>{

    if(!response){
        console.log("error")
    }
    response.json().then((data)=>{


        document.getElementById('box1').style.display="block"
        document.getElementById('box2').style.display="block"
        if(data.icon.length > 0 ){
            document.getElementById('src').style.display="block"
        }

        imge.src = data.icon
        console.log(data.icon)
        console.log(data)
        lat.textContent = data.latitude+" | "
        long.textContent = data.longitude
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
        if(data.day === "no" && data.day != null){
        document.querySelector('body').style.backgroundImage="url('/images/night1.jpg')"
        document.querySelector('.weather-content').style.backgroundColor='#000000'
        document.querySelector('#box1').style.backgroundColor='#080102'
        document.querySelector('#box2').style.backgroundColor='#080102'
        document.querySelector('footer').style.backgroundColor='#000000'
        document.querySelector('footer a').style.color='#ffffff'
        }
        else{
            document.querySelector('body').style.backgroundImage="url('/images/download.jfif')"
        }
        

        temp.textContent = data.currently
        console.log(data.currently)
        localTime.textContent= data.localtime
        w_degree.textContent= data.w_degree
        w_speed.textContent= data.w_speed
        humidity.textContent= data.humidity
        day.textContent= data.day
        visibility.textContent= data.visibility

    })
})
})