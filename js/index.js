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
            project.innerText = `${repositories[i].name}`;
            
            //Append to project list 
            projectList.appendChild(project);
            }
        }
    )
    .catch(error => console.log('Unable to load projects', error))





