//Adding in temperature API
fetch('https://api.open-meteo.com/v1/forecast?latitude=36.0726&longitude=-79.792&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York&forecast_days=1&temperature_unit=fahrenheit&precipitation_unit=inch')
    .then(response => response.json())
    .then(temperature => {
        console.log(temperature);
        
        //Create temperatureButton
        const weatherSection = document.querySelector('#Weather');

        const temperatureButton = document.createElement('button');

        temperatureButton.textContent="What's the temperature?";
        temperatureButton.className='temperatureButton';
        temperatureButton.type='button';

        temperatureButton.addEventListener("click", (event) => {
        const entry = event.target.parentNode;

        if(entry) {
            temperatureButton.textContent = `High of ${temperature.daily.temperature_2m_max[0]}${temperature.daily_units.temperature_2m_max}. 
            Low of ${temperature.daily.temperature_2m_min[0]}${temperature.daily_units.temperature_2m_min}.`;
        }
        });
        weatherSection.appendChild(temperatureButton);
    })
    .catch(error => console.log('Unable to load temperature Open API', error))


//Adding in precipitation API
fetch('https://api.open-meteo.com/v1/forecast?latitude=36.0726&longitude=-79.792&daily=precipitation_probability_max,precipitation_hours&timezone=America%2FNew_York&forecast_days=1&temperature_unit=fahrenheit&precipitation_unit=inch')
    .then(response => response.json())
    .then(precipitation => {
        console.log(precipitation);
        
        //Create precipitation button
        const weatherSection = document.querySelector('#Weather');
        const precipitationButton = document.createElement('button');

        precipitationButton.textContent="What's the chance of rain?";
        precipitationButton.className='precipitationButton';
        precipitationButton.type='button';

        precipitationButton.addEventListener("click", (event) => {
        const entry = event.target.parentNode;

        if(entry) {
        precipitationButton.textContent = `Precipitation chance is ${precipitation.daily.precipitation_probability_max[0]}${precipitation.daily_units.precipitation_probability_max}.`;
        }
        });
        weatherSection.appendChild(precipitationButton);
    })
    .catch(error => console.log('Unable to load precipitation Open API', error))