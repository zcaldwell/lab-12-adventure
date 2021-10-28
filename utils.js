import quests from './data/quest-data.js';

export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function generateUser(formData){
    return {
        completed: {},
        patience: 100,
        correctiveaction: 0,
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

export function scoreQuest(choiceObject, questId, userObject){
    userObject.patience += choiceObject.patience;
    userObject.correctiveaction += choiceObject.correctiveaction;
    userObject.completed[questId] = true;
}