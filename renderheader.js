import { getUser } from './utils.js';

export function renderHeader(){
    const user = getUser();

    const img = document.getElementById('header-avatar');
    img.src = `../assets/avatars/${user.job}.png`;
    const name = document.getElementById('user-name');
    name.textContent = user.name;
    const patience = document.getElementById('user-patience');
    patience.textContent = user.patience;
    const corrective = document.getElementById('user-correctiveaction');
    corrective.textContent = user.correctiveaction;

}