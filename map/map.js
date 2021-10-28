import quests from '../data/quest-data.js';
import { getUser, hasCompletedAllQuests } from '../utils.js';
import { renderHeader } from '../renderheader.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();

renderHeader();

// if (user.patience <= 0 || user.correctiveaction >= 3 || hasCompletedAllQuests(user)){
//     window.location.replace('../gameover');
// }

if (user.patience <= 0){
    window.location.replace('../youquit');
} else if (user.correctiveaction >= 3) {
    window.location.replace('../fired'); 
} else if (hasCompletedAllQuests(user)) {
    window.location.replace('../madeit'); 
} else {
    false;
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
    span.textContent = quest.title;
    mapLinks.appendChild(span);
}