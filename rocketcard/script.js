// GLOBAL DATA CAPTURE
let userName = document.getElementById("name");
let userAvatar = document.getElementById("avatar");
let userFollowers = document.getElementById("followers");
let userFollowing = document.getElementById("following");
let userRepos = document.getElementById("repos");
let userCompany = document.getElementById("company");
let userLocation = document.getElementById("location");

let inputName = document.getElementById("inputName");
let url = "https://api.github.com/users/";

// CORRECT FORM DATA SUBMISSION
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

// CHECK INPUT
function processUser(){
    if(inputName.value != ""){
        const urlUser = url + inputName.value;
        getUserInformations(urlUser);
    }
    inputName.value = "";
}

// CAPTURES THE INFORMED USER AND VERIFIES THEIR EXISTENCE
function getUserInformations(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.message == "Not Found" ? undefinedCard() : userCard(data);
    })
    .catch(error => console.error(error))
}

// STANDARD CARD FOR NON-EXISTING USERS
function undefinedCard(){
    userName.innerHTML = "Usuário não identificado";
    userAvatar.setAttribute('src', "assets/img/logo.svg");
    userAvatar.setAttribute('alt', "Logo Rocketseat");
    userFollowers.innerHTML = "???";
    userFollowing.innerHTML = "???";
    userRepos.innerHTML = "???";
    userCompany.innerHTML = "???";
    userLocation.innerHTML = "???";
}

// CARD FOR EXISTING USERS
function userCard(data){
    data.name == null ? userName.innerHTML = "???" : userName.innerHTML = data.name;
    userAvatar.setAttribute('src', data.avatar_url);
    userAvatar.setAttribute('alt', `Avatar ${data.name}`);
    userFollowers.innerHTML = data.followers;
    userFollowing.innerHTML = data.following;
    userRepos.innerHTML = data.public_repos;
    data.company == null ? userCompany.innerHTML = "???" : userCompany.innerHTML = data.company;
    data.location == null ? userLocation.innerHTML = "???" : userLocation.innerHTML = data.location;
}