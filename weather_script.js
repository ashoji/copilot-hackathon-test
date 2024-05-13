const axios = require('axios');
const readline = require('readline');

async function getWeatherData({ city, apiKey }) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        return error;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a city (default is Tokyo): ', (inputCity) => {
    const settings = {
        apiKey: '7fff74dea4746c53a552bdf858183d69',  // あなたのAPIキーをここに入力してください
        city: inputCity || 'Tokyo'
    };
    getWeatherData(settings)
        .then(data => {
            if (data instanceof Error) {
                console.error('Failed to get weather data');
            } else {
                console.log(data);
            }
        });
    rl.close();
});