const today = new Date();
const thisYear = today.getFullYear();

//Insert Copyright Text in Footer
const footer = document.createElement('footer');
document.body.appendChild(footer);

const selectedFooter = document.querySelector('footer');
const copyright = document.createElement('p'); 
copyright.textContent = `\u00A9 Fisher Charlton, ${thisYear}`; 

selectedFooter.appendChild(copyright);

//Create List of Skills
const skills = ["JavaScript", "R", "SAS", "SQL", "Tableau", "ArcGIS", "Microsoft Office Suite", "Google Suite", "Github"];
const skillsUl = document.querySelector('#skills ul');

function AddSkills() {
    var skill = document.createDocumentFragment();
    for (var i = 0; i < skills.length; i++){
        var s = document.createElement('li');
        s.innerHTML = skills[i];
        skill.append(s);
    }
    skillsUl.appendChild(skill);
};

AddSkills();

//Allow messages to be submitted
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log(userName, userEmail, userMessage);
//Display messages
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    
    newMessage.innerHTML = 
    `<a href="mailto:${event.target.usersEmail.value}" target="_blank" rel="noreferrer">${event.target.usersName.value}</a>
        <span> ${event.target.usersMessage.value} </span>`

//Add remove button
    const removeButton = document.createElement('button');

    removeButton.textContent='remove';
    removeButton.className='removeButton';
    removeButton.type='button';

    removeButton.addEventListener("click", (event) => {
        const entry = event.target.parentNode;

        if(entry) {
            entry.remove();
        }
    });

//Appened remove button
    newMessage.appendChild(removeButton);

//Append new messages
    messageList.appendChild(newMessage);

messageForm.reset();
});

//Fetch API
fetch("https://api.github.com/users/fgcharlton/repos")
    .then(response => response.text())
    .then(response => {
        const repositories = JSON.parse(response);
        console.log(repositories);
        
        //Create projectSection variable
        const projectSection = document.querySelector('#Projects');

        //Create projectList 
        const projectList = projectSection.querySelector('ul');

        //Loop repositories
        for(let i = 0; i < repositories.length; i ++){
            let project = document.createElement('li');
            project.innerHTML = `<a href="https://github.com/fgcharlton/${repositories[i].name}">${repositories[i].name}</a>`;
            
            //Append to project list 
            projectList.appendChild(project);
            }
        }
    )
    .catch(error => console.log('Unable to load projects', error))

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
            temperatureButton.textContent = `High of ${temperature.daily.temperature_2m_max}${temperature.daily_units.temperature_2m_max}. 
            Low of ${temperature.daily.temperature_2m_min}${temperature.daily_units.temperature_2m_min}.`;
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
        precipitationButton.textContent = `Precipitation chance is ${precipitation.daily.precipitation_probability_max}${precipitation.daily_units.precipitation_probability_max}.`;
        }
        });
        weatherSection.appendChild(precipitationButton);
    })
    .catch(error => console.log('Unable to load precipitation Open API', error))