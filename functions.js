// Constants for API key and base URL    
const API_KEY = '8ee633956bad6ae1965b557a94ecfcba';
const baseUrl = 'https://api.openweathermap.org/data/2.5';

// Function to fetch forecast data for a given city
const getForcast = async (city) => {
    try {
        // Configuration options for the API request
        const options = {
            headers: {
                "content-type": "application/json",
            },
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: "he"
            }
        };
        // Making the API call to fetch weather data
        const res = await axios.get(`${baseUrl}/weather`, options);
        return res.data; // Returning the received weather data
    } catch (error) {
        console.log(error); // Logging any errors that occur during the API call
    }
};

// Function to determine the appropriate icon source based on temperature data
const getIconSrc = (data) => {
    // Determining the temperature range based on 'feels_like' temperature
    let temperatureRange;
    const feelsLike = data.main.feels_like;

    if (feelsLike <= 20) {
        temperatureRange = 'cold';
    } else if (feelsLike > 20 && feelsLike <= 30) {
        temperatureRange = 'pleasant';
    } else {
        temperatureRange = 'hot';
    }

    let iconSrc;
    // Assigning the icon source URL based on the determined temperature range
    switch (temperatureRange) {
        case 'cold':
            iconSrc = 'http://openweathermap.org/img/w/13d.png';
            break;
        case 'pleasant':
            iconSrc = 'http://openweathermap.org/img/w/02d.png';
            break;
        case 'hot':
            iconSrc = 'http://openweathermap.org/img/w/01d.png';
            break;
        default:
            iconSrc = 'http://openweathermap.org/img/w/03d.png';
            // Default icon in case temperatureRange doesn't match any case
    }
    return iconSrc; // Returning the determined icon source URL
};

export { getForcast, getIconSrc }; // Exporting the functions for external use


