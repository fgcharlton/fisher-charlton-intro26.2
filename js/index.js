const today = new Date();
const thisYear = today.getFullYear();

//Insert Copyright Text in Footer
const footer = document.querySelector('footer');
const symbol = document.createElement('span'); // symbol
symbol.textContent = '\u00A9'; 
const name = document.createElement('span'); // name
name.textContent = ' Fisher Charlton, '; 
const copyright = document.createElement('span'); // year
copyright.textContent = thisYear; 

footer.append(symbol, name, copyright);

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
    var UlSkills = document.getElementById('UlSkills');
    UlSkills.appendChild(skill);
}

AddSkills();