
const senior = {
    id: 'senior',
    title: 'It`s Wednesday, Senior day!',
    map: {

    },
    image: '../assets/oldman.png',
    description: `
        It is wednesday, which means the horde of seniors has decended upon us. The smell of mothballs and entitlement wafts through the air as one of them approaches you with a bigger frown than normal. They are angry becuase the store does not have their prune juice and ask why the shelves are empty. What do you do? 
    `,
    choices: [{
        id: 'explain',
        description: 'Explain the pandemic',
        result: `
            You explain to the senior that because  the supply chain has been interrupted and nobody wants work, making stores unable to provide their wares. The senior doesn't care and says back when they were younger people would walk to work in 10 feet of snow even if they had the plague.
        `,
        patience: -30,
        correctiveaction: 0,
    }, {
        id: 'sarcasm',
        description: 'Sarcastic Response',
        result: `
            You chuckle at the question and say "Yeah I have no idea why the shelves are empty, its not like there is a global plague or anything right now." The senior frowns so hard it almost looks like a smile. They ask to speak to your manager.
        `,
        patience: +20,
        correctiveaction: +1,
    }, {
        id: 'combative',
        description:'Fed Up Response',
        result: `
            You tell the senior that you are selling plums for 1.99 a pound and they can make their own if they want prune juice. They ask to speak to your manager. 
        `,
        patience: -20,
        correctiveaction: +2,
    
    }]

};

const antimasker = {
    id: 'antimasker',
    title: 'I have a medical exemption!',
    map: {

    },
    image: '../assets/mask.png',
    description: `
        The pandemic has been ravaging the world for over a year and would be over but people cling onto "muh liberties" and refuse to follow the simplest solutions. A man wearing a "don't tread on me" shirt and an american flag as a cape walks into the store wihtout the required face covering. What do you do?
    `,
    choices: [{
        id: 'apathy',
        description: 'Not Worth The Arguement.',
        result: `
        You approach the man and ask him if he would like a mask. He grins and says "I have a medican exemption, here is a letter from my Chriopracter that says I get back pain if I don't have enough oxygen" You sigh and realize its not worth your time and decide to go back to work at ignore them.
        `,
        patience: -50,
        correctiveaction: 0,
    }, {
        id: 'assertive',
        description: 'Be Assertive.',
        result: `
        Before the man walks in the door you stop him and tell him he cannot come in if he doesn't have a mask. He waves his medical exemption he made in MSpaint in your face but you tell him there isn't a medical exemption for being stupid and shrug your shoulders. He says he is going to write a letter to corporate and that you will be fired.`,
        patience: +40,
        correctiveaction: +1,
    }, {
        id: 'argue',
        description: 'Talk To A Wall.',
        result: `
        An co-worker of yours asks you to speak to a man not wearing a mask in the store because they will not listen to them. You go and have a conversation with the man which lasts for an hour and he makes abosolutely no sense. As it drags on you slowly die inside but don't budge.He eventually asks to speak to a manager and the manager apologizes and lets the man shop with no mask on but a smug look on his face.
        `,
        patience: -60,
        correctiveraction: +2,
    }]

};

const thief = {
    id: 'thief',
    title: 'I demand a refund!',
    map: {

    },
    image: '../assets/refund.png',
    description: `
    A customer walks up to you with a bag that has 10 hydroflasks in it and says they want a refund. You ask for a receipt and they say they do not have one. They say they were a gift from their mother. You glance over at the hydroflask shelf and see they are completely empty even though it was full the other day.
    `,
    choices: [{
        id: 'deny',
        description: 'Deny The Refund.',
        result: `
        You explain to the customer that you cannot give them a refund for that many things without a receipt. They become intantly agitaged and say "But I talked to someone named....Jon about it..." Nobody named Jon works there so you tell them sorry you can't get a refund. They ask for a manager who gives them the money. They come back in the next day and steal them again...`,
        patience: -30,
        correctiveaction: +1,
    }, {
        id: 'giftcard',
        description: 'Give Them A Giftcard.',
        result:`
        You tell the customer if they want refund they can have a giftcard. Despite the fact they are obviously stolen the person demands a cash refund. You shrug and tell them its the best you can do. They take their gift card and sell it on craigslist for half the price.
        `,
        patience: -20,
        correctiveaction: 0,
    }, {
        id: 'accuse',
        description: 'Accuse Them Of Stealing.',
        result:` This being the third time in a month the person has returned expensive things without a receipt you accuse the person of returning stolen merchandise. They become defensive and demand to speak to your Manager who apologizes and gives them a cash refund. You sigh and sink deeper into apathy.
        `,
        patience: -50,
        correctiveaction: +2,
    }]
 
};

const quests = [
    senior,
    antimasker,
    thief,
];

export default quests;