Node Weather Module.

To run this project install all packeages, in terminal write npm run or start from package.json

Project has 2 GET endpoints.

First endpoint its weather forecast by city. ```http:localhost:5100/weather/city/:city``` where :city name of your city. Example ```http:localhost:5100/weather/city/London```

Second endpint its weather forecast by coordinates. ``` http:localhost:5100/weather/coord/:lat/:lon``` where :lat :lon your coordinates. 
Example 
``` http://localhost:5100/weather/coord/51.5085/-0.1257```

Example  response (same for 2 endpoints):
```json
{
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 286.48,
        "feels_like": 286.27,
        "temp_min": 285.35,
        "temp_max": 287.74,
        "pressure": 1023,
        "humidity": 92
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.66,
        "deg": 270
    },
    "clouds": {
        "all": 100
    },
    "dt": 1708257180,
    "sys": {
        "type": 2,
        "id": 2075535,
        "country": "GB",
        "sunrise": 1708240205,
        "sunset": 1708276751
    },
    "timezone": 0,
    "id": 2643743,
    "name": "London",
    "cod": 200
}
```
