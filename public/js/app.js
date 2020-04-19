// const { response } = require("express")

// const { response } = require("express")
console.log("Working")
const url = 'http://localhost:3000/weather?address=lagos'



//using the fetch api function

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=lagos').then((response)=>{

//     if(!response){
//         console.log("error")
//     }
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form')
const searchValue = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
const long = document.querySelector('#long')
const lat = document.querySelector('#lat')
// const box = document.getElementById('box1').style.display="block"

// icons:icons,
            // weatherCode,
            // time,
            // localtime,
            // timeZoneId,
            // w_degree, w_speed, w_direction, humidity, cloud_cover, day, visibility

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
        console.log(data)
        lat.textContent = data.latitude+" | "
        long.textContent = data.longitude
        messageOne.textContent = 'Location: '+data.location
        messageTwo.textContent = 'Forecast: '+ data.forecast
        
    })
})
})