
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

