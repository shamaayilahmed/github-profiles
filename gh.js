const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('shamaayilahmed');

async function getUser(user) {
  const response = await fetch(APIURL + user);
  const responseData = await response.json();

  createProfile(responseData);
}

function createProfile(user) {
  const card = `
  <div class='card'>
    <div class='avatar'>
      <img src='${user.avatar_url}' alt='${user.name}' />
    </div>
    <div>
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

      <ul class='info'>
        <li>${user.followers}</li>
        <li>${user.following}</li>
        <li>${user.public_repos}</li>
      </ul>
    </div>
  </div>
  `;

  main.innerHTML=card;
}

form.addEventListener('submit',e=>{
  e.preventDefault();

  const user=search.nodeValue;

  if(user){
    getUser(user);
    search.value='';
  }
})