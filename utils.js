import quests from './data/quest-data.js';

export function generateUser(formData){
    return {
        completed: {},
        patience: 100,
        correctiveactions: 0,
        name: formData.get('name'),
        job: formData.get('job'),
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);

}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}