# WeatherApp
This is a weather dashboard 

The user is presented with a simple interface consisting of a single search field. Once a city is entered in the search field the current weather conditions for that city are presented in the centre of the screen below which 5 cards are displayed with the weather forecast for the next 5 days.
Included int the current weather data is the UV index with a colour changing background (green for low, amber for moderate and red for high) (ps it has never gone beyond green here in rainy Manchester UK!!)
The city is then added to a list of previously visited cities which are store locally on the user’s browser. 


The main search function is powered by open-weather 5day forecast API which supports city name search. 
This API returns the 5-day forecast and it also returns the latitude and longitude coordinates for the searched city. These are then fed into a new function to generate a second API search (one call API) from open weather that returns the current weather conditions including the UV index. 
Icons representing the weather are also provided by open weather and are used by generating a dynamic URL link to the correct icon depending on the weather conditions returned by the API search. 

Repository:
https://github.com/Omnikorn/WeatherApp.git

Deployed app:
https://omnikorn.github.io/WeatherApp/

Openweather API – 5 day forecast
https://openweathermap.org/forecast5

Openweather API – onecall :
https://openweathermap.org/api/one-call-api

