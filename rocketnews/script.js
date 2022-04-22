// FICTIONAL DATABASE
let database = [];

// DATA PROCESSING
function send(){
    const email = document.getElementById("mail").value;
    const form = document.getElementsByClassName("main-form")[0];
    form.addEventListener('submit', submitted);
    function submitted(event) {
    event.preventDefault();
    }

    if(email != "" && email.includes("@") && email.includes(".") && email.length >= 5){
        const body = document.getElementsByTagName("body")[0];
        const section = document.createElement("section");
        section.setAttribute("class", "floating-card");
        body.appendChild(section);
        if(!database.includes(email)){
            section.innerHTML = `<div class="card-box"><h1>O e-mail <span class="spotlightgreen">${email}</span> foi registrado com sucesso!</h1><button type="submit" class="clean" onclick="clean()">Fechar</button></div>`;
            database.push(email);
        } else{
            section.innerHTML = `<div class="card-box"><h1>O e-mail <span class="spotlightred">${email}</span> já está registrado em nosso banco de dados, tente outro.</h1><button type="submit" class="clean" onclick="clean()">Fechar</button></div>`;
        }
    }
}

// DELETE CARD
function clean(){
    const email = document.getElementById("mail");
    const section = document.getElementsByClassName("floating-card")[0];
    section.remove(section);
    email.value = "";
}
