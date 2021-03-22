// variabvles
var cityEl = document.querySelector("#cityName")
var submitEl = document.querySelector("#submit_btn")
var APPID = "5529346d7fb490d9f9af910d01a074f0"
var palyEl=""
var testEl=document.querySelector("#test")
var tempEl=document.querySelector("#temp");
var temp=""
var humEl=document.querySelector("#humidity");
var humidity=""
var windEl=document.querySelector("#wind");
var wind=""
var uvEl=document.querySelector("#uv");
var uvi="";
// var citylistEl=
var listOfCities=[];
// functions

function handleSearch(event){
    event.preventDefault();

    var cityName = cityEl.value.trim();
    console.log(cityName);
    if (!cityName){
        console.error("you need a valid city name please");
    }
    createURL();
    citylist(cityName);
    
    // getData();
}

function createURL(){
    var cityURL="api.openweathermap.org/data/2.5/weather?id="+ cityName.value +"&appid=" + APPID;
    console.log(cityURL);
}


function citylist(cityName){
listOfCities.push(cityName);
console.log("list of cities include:: " + listOfCities)
localStorage.setItem("visitedCities", JSON.stringify(listOfCities));
}

// function getData() {
	// fetch(
	// 	"https://api.openweathermap.org/data/2.5/onecall?lat=53.5&lon=2.6&appid=5529346d7fb490d9f9af910d01a074f0"
// 	// )
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log("response is: " + data);
//             console.log(typeof(data));
//             console.log(data.current.weather[0].description);
//             palyEl=data.current.weather[0].description;
//             testEl.textContent=(palyEl);
//             temp=data.current.temp;
//             console.log("temp: "+ temp)
//             tempEl.textContent=(temp);
//             humidity=data.current.humidity;
//             console.log("humidity: "+ humidity)
//             humEl.textContent=(humidity);
//             wind=data.current.wind_speed;
//             console.log("wind: "+ wind)
//             windEl.textContent=(wind);
//             uvi=data.current.uvi
//             console.log("uvi: "+ uvi)
//             uvEl.textContent=(uvi)
// 		})
// }

// button functions
submitEl.addEventListener('click', handleSearch);
// getData()
