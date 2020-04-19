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

messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const valu = searchValue.value
    fetch('/weather?address='+valu).then((response)=>{

    if(!response){
        console.log("error")
    }
    response.json().then((data)=>{
        console.log(data)
        messageOne.textContent = 'Location: '+data.location
        messageTwo.textContent = 'Forecast: '+ data.forecast
        
    })
})
})