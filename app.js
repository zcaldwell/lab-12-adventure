// import functions and grab DOM elements

import { generateUser, setUser } from './utils.js';

// initialize global state
const userForm = document.getElementById('quest-form');
// set event listeners 
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userObj = generateUser(formData);
    setUser(userObj);
    window.location.replace('./map');
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
