// variabvles
var cityEl = document.querySelector("#cityName")
var submitEl = document.querySelector("#submit_btn")
var APPID = "5529346d7fb490d9f9af910d01a074f0"
var palyEl=""
var testEl=document.querySelector("#test")
// functions

// function handleSearch(event){
//     event.preventDefault();

//     var cityName = document.querySelector("cityName").value

//     if (!cityName){
//         console.error("you need a valid city name please");
//     }
//     // createURL()
//     getData();
// }

// function createURL(){
//     var cityURL="api.openweathermap.org/data/2.5/weather?id="+ cityName +"&appid=" + APPID;
//     console.log(cityURL);
// }

function getData() {
	fetch(
		"https://api.openweathermap.org/data/2.5/onecall?lat=53.5&lon=2.6&appid=5529346d7fb490d9f9af910d01a074f0"
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log("response is: " + data);
            console.log(typeof(data));
            console.log(data.current.weather[0].description);
            palyEl=data.current.weather[0].description;
            testEl.textContent=(palyEl)
            
		})
}

// button functions
// submitEl.addEventListener('submit', handleSearch);
getData()
