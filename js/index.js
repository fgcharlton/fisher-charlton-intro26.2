const today = new Date();
const thisYear = today.getFullYear();

//Insert Copyright Text in Footer
const footer = document.createElement('footer');
const copyright = document.createElement('p'); 
copyright.textContent = `\u00A9 Fisher Charlton, ${thisYear}`; 
footer.appendChild(copyright);

document.body.appendChild(footer);


//Create List of Skills
const skills = ["JavaScript", "R", "SAS", "SQL", "Tableau", "ArcGIS", "Microsoft Office Suite", "Google Suite", "Github"];
var skillsSection = document.getElementById('UlSkills');

function AddSkills() {
    var skill = document.createDocumentFragment();
    for (var i = 0; i < skills.length; i++){
        var s = document.createElement('li');
        s.innerHTML = skills[i];
        skill.append(s);
    }
    var Skills = document.getElementById('Skills');
    Skills.appendChild(skill);
}

AddSkills();