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
    console.log(event.target.usersName.value);
    console.log(event.target.usersEmail.value);
    console.log(event.target.usersMessage.value);

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
            newMessage.remove();
        }
    });

//Appened remove button
    newMessage.appendChild(removeButton);

//Append new messages
    messageList.appendChild(newMessage);

messageForm.reset();
});
