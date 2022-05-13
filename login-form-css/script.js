// GLOBAL DATA COLLECTION
let inputMail = document.getElementsByClassName("bgmail")[0];
let svgMail = document.getElementsByTagName("svg")[0];
let inputLock = document.getElementsByClassName("bglock")[0];
let svgLock = document.getElementsByTagName("svg")[1];

// ENABLE OR DISABLE ICON COLOR
inputMail.addEventListener("focus", () => {
    enableOrDisableIcon(svgMail, "no");
});
inputMail.addEventListener("blur", () => {
    enableOrDisableIcon(svgMail);
});
inputLock.addEventListener("focus", () => {
    enableOrDisableIcon(svgLock, "no");
});
inputLock.addEventListener("blur", () => {
    enableOrDisableIcon(svgLock);
});

function enableOrDisableIcon(correspondigSvg, activationIdentifier){
    if(activationIdentifier == "no"){
        correspondigSvg.classList.add("active");
    } else{
        correspondigSvg.classList.remove("active");
    }
}

// VISIBLE PASSWORD
let svgEye = document.getElementsByTagName("svg")[2];
function changeVisibility(){
    if(inputLock.getAttribute("type") == "password"){
        inputLock.setAttribute("type", "text");
        svgEye.classList.add("active");
    } else{
        inputLock.setAttribute("type", "password");
        svgEye.classList.remove("active");
    }
}