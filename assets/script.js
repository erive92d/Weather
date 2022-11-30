var apiKey = '0c4e7dd6f717e6bcc15f38209147724e';

// var urlLink = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={0c4e7dd6f717e6bcc15f38209147724e}`

var latValue = document.querySelector('.latValue')
var lonValue = document.querySelector('.lonValue')
var searchBtn = document.querySelector('.btn')
var formValue = document.querySelector('.me-2')


// var urlLink = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latValue+'&lon='+lonValue+'&appid=0c4e7dd6f717e6bcc15f38209147724e'
var urlLink2 = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=0c4e7dd6f717e6bcc15f38209147724e'

// searchBtn.addEventListener('click', function() {

// })
// var urlLink2 = 'http://api.openweathermap.org/geo/1.0/direct?q='+formValue.value+'&limit=5&appid=0c4e7dd6f717e6bcc15f38209147724e'
fetch(urlLink2)
.then (function(response) {
    return response.json()
})
.then (function(data) {
    console.log(data)
})


// fetch(urlLink2)
//     .then (function(response) {
//         return response.json()
// })
//     .then (function(data) {
//         console.log(data)
// })

























// button.addEventListener('click',function() {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0c4e7dd6f717e6bcc15f38209147724e')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)

//         var nameValue = data.name
//         var tempValue = data.main.temp
//         var descValue = data.weather[0].description

//         city.innerHTML = nameValue
//         temp.innerHTML = tempValue
//         desc.innerHTML = descValue

//     })

//     .catch(function(err) {
//         alert("Wrong city name!")
//     })
// })




    