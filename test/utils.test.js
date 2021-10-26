// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser, setUser, getUser } from '../utils.js';

const test = QUnit.test;

test('generateUser should give us an object with name and job', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        patience: 100,
        correctiveactions: 0,
        name: 'Zach',
        job: 'Cashier',
    };

    const formData = new FormData();
    formData.set('name', 'Zach');
    formData.set('job', 'Cashier');
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setUser should save user to localStorage', (expect)=> {
    localStorage.removeItem('USER');
    const userObject = {
        completed: {},
        patience: 100,
        correctiveactions: 0,
        name: 'Zach',
        job: 'Cashier',
    };

    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, userObject);
});

test('getUser should get user data from local storage', (expect) => {
    localStorage.removeItem('USER');
    const userObject = {
        completed: {},
        patience: 100,
        correctiveactions: 0,
        name: 'Zach',
        job: 'Cashier',
    };

    setUser(userObject);

    const actual = getUser();
    expect.deepEqual(actual, userObject);
});
