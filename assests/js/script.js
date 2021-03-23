// variabvles
var cityEl = document.querySelector("#cityName")
var submitEl = document.querySelector("#submit_btn")
var APPID = "5529346d7fb490d9f9af910d01a074f0"
var palyEl = ""
var testEl = document.querySelector("#test")
var tempEl = document.querySelector("#temp")
var temp = ""
var humEl = document.querySelector("#humidity")
var humidity = ""
var windEl = document.querySelector("#wind")
var wind = ""
var uvEl = document.querySelector("#uv")
var uvi = ""
var citylistEl = document.querySelector("#list_of_cities")
var listOfCities = []
var cities = []
var date=""
var dateEl= document.querySelector("#date")
var cityfinalEl= document.querySelector("#citynamefinal")
// functions

function handleSearch(event) {
	event.preventDefault()

	var cityName = cityEl.value.trim()
	console.log(cityName)
	if (!cityName) {
		console.error("you need a valid city name please")
	}
	createURL();
	citylist(cityName);
    getStoreCities();
    writeList();
	getData();
}

function createURL() {
	var cityURL =
		"https://api.openweathermap.org/data/2.5/weather?id=" +
		cityName.value +
		"&appid=" +
		APPID
	console.log(cityURL)
}

function citylist(cityName) {
	listOfCities.push(cityName)
	console.log("list of cities include:: " + listOfCities)
	localStorage.setItem(
		"visitedCities",
		JSON.stringify(listOfCities)
	)
}

function getStoreCities() {
	var storedCities = JSON.parse(
		localStorage.getItem("visitedCities")
	)
	if (storedCities !== null) {
		cities = storedCities
	}
}

function writeList() {
	// Clear todoList element and update todoCountSpan
	citylistEl.innerHTML = ""

	// Render a new li for each todo
	for (var i = 0; i < cities.length; i++) {
		var city = cities[i]

		var li = document.createElement("li")
		li.textContent = city
		li.setAttribute("data-index", i)

		citylistEl.appendChild(li)
	}
}

function getData(){ 
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=53.5&lon=2.6&appid=5529346d7fb490d9f9af910d01a074f0")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
            cityfinalEl.textContent=(cityName.value)
			console.log("response is: " + data);
            console.log(typeof(data));
            console.log(data.current.weather[0].description);
            palyEl=data.current.weather[0].description;
            testEl.textContent=(palyEl);
            date=data.current.dt;
            dateEl.textContent=(date);
            temp=data.current.temp;
            console.log("temp: "+ temp)
            tempEl.textContent=(temp);
            humidity=data.current.humidity;
            console.log("humidity: "+ humidity)
            humEl.textContent=(humidity);
            wind=data.current.wind_speed;
            console.log("wind: "+ wind)
            windEl.textContent=(wind);
            uvi=data.current.uvi
            console.log("uvi: "+ uvi)
            uvEl.textContent=(" "+uvi+" ")
                if (uvi>= 6){
                    uvEl.setAttribute("style", "background-color:red");
                } else if (uvi < 6 && uvi >= 3) {
                    uvEl.setAttribute("style","background-color: yellow");
                } else { uvEl.setAttribute("style","background-color: green")}
		})
    }

// button functions
submitEl.addEventListener("click", handleSearch)
getData()
