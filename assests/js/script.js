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
var date = ""
var dateEl = document.querySelector("#date")
var cityfinalEl = document.querySelector("#citynamefinal")
var iconEl = document.querySelector("#icon")
var iconJS = ""
var lat = ""
var lon = ""
var cityName = ""
var url2 = ""
var desciptionEl = document.querySelector("#description")
var listEl = document.querySelector("#list")
var cardEl
var nameEl
var tempoEl
var humidityEl
var cityURL = ""
// functions

// handles search form function
function handleSearch(event) {
	event.preventDefault()
	cityName = cityEl.value.trim()
	cityEl.value = ""
	console.log(cityName)
	if (!cityName) {
		console.error("you need a valid city name please")
	}
	testEl.textContent = cityName
	createURLcity(cityName)
	citylist(cityName)
	getStoreCities()
	writeList(listOfCities)
	cityName.innerHTML = ""
	// fiveDay()
}

// creates URL from the city entered in search
function createURLcity() {
	cityURL =
		"https://api.openweathermap.org/data/2.5/forecast?q=" +
		cityName +
		"&appid=" +
		APPID
	console.log(cityURL)
	fiveDay(cityURL)
}

// create list of cities visited
function citylist(cityName) {
	listOfCities.push(cityName)
	console.log("list of cities include:: " + listOfCities)
	localStorage.setItem(
		"visitedCities",
		JSON.stringify(listOfCities)
	)
}

// gets a list of visited cities stored locally
function getStoreCities() {
	var storedCities = JSON.parse(
		localStorage.getItem("visitedCities")
	)
	if (storedCities !== null) {
		cities = storedCities
	}
}

// displays the list of cities visited
function writeList(visitedCities) {
	// Clear the list field
	citylistEl.innerHTML = ""

	// Render a new li for each todo
	for (var i = 0; i < visitedCities.length; i++) {
		var city = visitedCities[i]

		var li = document.createElement("li")
		li.textContent = city
		li.setAttribute("data-index", i)

		citylistEl.appendChild(li)
	}
}

// calls the five day forcast api- this provides the lat and log for the next function
function fiveDay() {
	fetch(cityURL)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			lat = data.city.coord.lat
			lon = data.city.coord.lon
			console.log("latitude= " + lat)
			console.log("longitude= " + lon)

			miracle(data)
			latLanURL()
		})
}

// function to display 5 day forcast
function miracle(data) {
	listEl.innerHTML = ""
	console.log("after line 120 data:" + JSON.stringify(data))
	for (i = 5; i < data.list.length; i = i + 8) {
		cardEl = document.createElement("li")
		cardEl.classList = "card card-body bg-light mb-3"

		nameEl = document.createElement("p")
		nameEl.textContent =
			"date" +
			new Date(data.list[i].dt_txt).toLocaleDateString()
		console.log("nameEl= " + nameEl)
		cardEl.appendChild(nameEl)

		tempoEl = document.createElement("p")
		tempoEl.textContent =
			"The tempreture is " + data.list[i].main.temp + "c"
		console.log("tempoEl= " + tempEl)
		cardEl.appendChild(tempoEl)

		humidityEl = document.createElement("p")
		humidityEl.textContent =
			"the humidity is " + data.list[i].main.humidity + "%"
		console.log("humidityEl= " + humidityEl)
		cardEl.appendChild(humidityEl)
		listEl.appendChild(cardEl)
	}
}

// creates a second url from the lat and lon to push into the second fetch api
function latLanURL() {
	url2 =
		"https://api.openweathermap.org/data/2.5/onecall?lat=" +
		lat +
		"&lon=" +
		lon +
		"&units=metric&appid=" +
		APPID
	console.log("second url is " + url2)
	getData(url2)
}

// current weather and uvi from lat and lon search
function getData() {
	fetch(url2)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			cityfinalEl.textContent = cityName.value
			console.log("response is: " + data)
			console.log(typeof data)
			console.log(data.current.weather[0].description)
			palyEl = data.current.weather[0].description
			desciptionEl.textContent = palyEl
			iconJS = data.current["weather"][0]["icon"]
			console.log("icone code= " + iconJS)
			var iconURL =
				"http://openweathermap.org/img/wn/" +
				iconJS +
				".png"
			iconEl.setAttribute("src", iconURL)

			// date=date.textContent
			dateEl.textContent = new Date().toLocaleDateString()
			temp = data.current.temp
			console.log("temp: " + temp)
			tempEl.textContent = temp
			humidity = data.current.humidity
			console.log("humidity: " + humidity)
			humEl.textContent = humidity
			wind = data.current.wind_speed
			console.log("wind: " + wind)
			windEl.textContent = wind

			uvi = data.current.uvi
			console.log("uvi: " + uvi)
			uvEl.textContent = " " + uvi + " "
			if (uvi >= 6) {
				uvEl.setAttribute("style", "background-color:red")
			} else if (uvi < 6 && uvi >= 3) {
				uvEl.setAttribute(
					"style",
					"background-color: yellow; color: black"
				)
			} else {
				uvEl.setAttribute(
					"style",
					"background-color: green"
				)
			}
		})
}

function miracle7(data) {
	for (i = 0; i < data.length; i++) {
		cardEl = document.createElement("li")
		cardEl.classList = "card card-body bg-light mb-3"
		nameEl = document.createElement("h3")
		// nameEl.textContent=data.list[i].dt_text;
		// console.log("nameEl= " + nameEl);
		// cardEl.appendChild(nameEl);
		tempoEl = document.createElement("p")
		tempoEl.textContent =
			"The tempreture is " + data.daily[i].temp.day + "c"
		console.log("tempoEl= " + tempEl)
		cardEl.appendChild(tempoEl)
		humidityEl = document.createElement("p")
		humidityEl.textContent =
			"the humidity is " + data.daily[i].humidity + "%"
		console.log("humidityEl= " + humidityEl)
		cardEl.appendChild(humidityEl)
		listEl.appendChild(cardEl)
	}
}

// button functions
submitEl.addEventListener("click", handleSearch)
citylistEl.addEventListener("click", function (event) {
	event.preventDefault
	cityName = event.target.textContent
	createURLcity(cityName)
	// fiveDay();
})
// fiveDay()
// getData()
writeList(listOfCities)
// handleSearch(listOfCities[listOfCities.length-1])