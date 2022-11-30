var apiKey = "0c4e7dd6f717e6bcc15f38209147724e";

var latValue = document.querySelector(".latValue");
var lonValue = document.querySelector(".lonValue");
var searchBtn = document.querySelector(".btn");
var formValue = document.querySelector(".form-control");
var containerEl = document.querySelector('.container')

var cityName = document.querySelector('.card-title')

var urlLink =
  "https://api.openweathermap.org/data/2.5/forecast?lat=" +
  latValue +
  "&lon=" +
  lonValue +
  "&appid=0c4e7dd6f717e6bcc15f38209147724e";

// searchBtn.addEventListener('click', function() {

// })
// var urlLink2 = 'http://api.openweathermap.org/geo/1.0/direct?q='+formValue.value+'&limit=5&appid=0c4e7dd6f717e6bcc15f38209147724e'
var lon;
var lat;

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var lon;
  var lat;

  var urlLink2 =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    formValue.value +
    "&limit=5&appid=0c4e7dd6f717e6bcc15f38209147724e";
  fetch(urlLink2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      lon = data[0].lon;
      lat = data[0].lat;

      var urlLink =
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=0c4e7dd6f717e6bcc15f38209147724e";

      fetch(urlLink)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
            console.log(data.list[0])
          var sky = data.list[0].weather[0].main
          var temp = data.list[0].main.temp;
          var humidity = data.list[0].main.humidity
          var wind = data.list[0].wind.speed
          weatherInfo(formValue.value)
        });
    });
});

var currentTime = dayjs().format('MMMM DD dddd')
console.log(currentTime)

var weatherInfo = function(city) {    
    var weatherContainer = document.createElement('div')

    cityName.textContent = city

  
    

}

