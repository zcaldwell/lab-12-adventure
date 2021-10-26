import quests from '../data/quest-data.js';
import { getUser, hasCompletedAllQuests } from '../utils.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();

if (user.patience <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../gameover');
}

for (let quest of quests){
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else { 
        displayLink(quest);
    }
}
    
function displayLink(quest){   
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    mapLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.testContent = quest.title;
    mapLinks.appendChild(span);
}