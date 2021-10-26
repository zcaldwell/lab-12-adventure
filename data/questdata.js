
const senior = {
    id: 'senior',
    title: 'Senior Day Massacre',
    map: {

    },
    image: null,
    description: `
        It is wednesday which means the horde of seniors has decended upon us. The smell of mothballs and entitlement wafts through the air as one of them approaches you with a bigger frown than normal. They are angry becuase the store does not have their prune juice and ask why the shelves are empty. What do you do? 
    `,
    choices: [{
        id: 'explain',
        description: `
            You explain to the senior that because a plague has decended upon the land the supply chain has been interrupted and nobody wants work making stores unable to provide their wares. The senior doesn't care and says back when they were younger people would walk to work in 10 feet of snow even if they had the plague.
        `,
        patience: -30,
        correctiveaction: 0,
    }, {
        id: 'sarcasm',
        description:`
            You chuckle at the question and say "Yeah I have no idea why the shelves are empty, its not like there is a global plague or anything right now." The senior frowns so hard it almost looks like a smile. They ask to speak to your manager.
        `,
        patience: +20,
        correctiveaction: +1,
    }, {
        id: 'combative',
        description:`
            You tell the senior that you are selling plums for 1.99 a pound and they can make their own if they want prune juice.
        `,
        patience: -20,
        correctiveaction: +1,
    
    }]

};

const antimasker = {
    id: antimasker,
    title: 'I have a medical exemption!',
    map: {

    },
    image: null,
    description: `
        The plague has been ravaging the land for over a year and would be over but people cling onto "muh liberties" and refuse to follow the simplest solutions. A man wearing a "don't tread on me" shirt and an american flag as a cape walks into the store wihtout the required face covering. What do you do?
    `,
    choices: [{
        id: 'diplomacy',
        desription: `
        
        `
    }]

};

const thief = {

}

const regular = {

}

const quests = [
    senior,
    antimasker,
    thief,
    regular,
];

export default quests;