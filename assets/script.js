var apiKey = "0c4e7dd6f717e6bcc15f38209147724e";

var latValue = document.querySelector(".latValue");
var lonValue = document.querySelector(".lonValue");
var searchBtn = document.querySelector(".btn");
var formValue = document.querySelector(".form-control");
var containerEl = document.querySelector('.container')


var cityName = document.querySelector('.card-title')

var urlLink =
  "http://api.openweathermap.org/data/2.5/forecast?lat=" +
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
        "&units=imperial&cnt=5&appid=0c4e7dd6f717e6bcc15f38209147724e";

      fetch(urlLink)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
         var dataInfo = data.list

        
        
          
          for(var i = 0; i <= dataInfo.length; i++) {
            // console.log(dataInfo[i].main.humidity)
          var mainContainer = document.querySelector('.main-container')
          var cardEl = document.createElement('div');
          cardEl.classList.add('card')

          //Icon
          var icon = document.createElement('i');
          
         

          //DAY
          var dayValue = document.createElement('div')
          dayValue.textContent = dayjs().add(i, 'day').format('MMMM DD dddd');
          dayValue.classList.add('infos','day')
            
          //Temperature
          
          var tempValue = dataInfo[i].main.temp
          var tempDiv = document.createElement('div');
          tempDiv.textContent = 'TEMP: ' + tempValue
          tempDiv.classList.add('infos')

          //Wind
          var windValue = dataInfo[i].wind.speed
          var windDiv = document.createElement('div')
          windDiv.textContent = 'WIND: ' + windValue +'MPH'
          windDiv.classList.add('infos')

          //Humidity
          var humidValue = dataInfo[i].main.humidity
          var humidDiv = document.createElement('div')
          humidDiv.textContent = 'HUMIDITY: ' + humidValue + '%'
          humidDiv.classList.add('infos')
          
          var condition = dataInfo[i].weather[0].main
          console.log(condition)
          if(condition === 'Rain') {
            icon.classList.add('fa-solid','fa-cloud-showers-heavy')
          } else if(condition === 'Clouds') {
           icon.classList.add('fa-sharp','fa-solid','fa-cloud')
          } else {
            icon.classList.add('fa-solid','fa-sun')
          }


          
          
          cardEl.append(dayValue,tempDiv,windDiv,humidDiv,icon)


         
         
         
          
        
            mainContainer.append(cardEl)
            
            
            

          // console.log(dataInfo[i].weather[0].main)

           
        }
       
       
       
        
      }
          
         
          
      );
      formValue.value = ''
      
    });
});




var currentTime = dayjs().format('MMMM DD dddd')
console.log(currentTime)
$('#current-date').text(currentTime)





