// GLOBAL DATA CAPTURE
const floatingForm = document.getElementsByClassName("floating-set")[0];
const spaceOfSeconds = document.getElementById("seconds");
const spaceOfMinutes = document.getElementById("minutes");
const spaceOfHours = document.getElementById("hours");
const spaceOfDays = document.getElementById("days");

// PRE-DETERMINED COUNTDOWN
let days = 08;
let hours = 12;
let minutes = 44;
let seconds = 28;

// COUNTDOWN CLOCK
const interval = setInterval(countdown, 1000);

// VERIFY AND DETERMINE WATCH CONDITIONS
function countdown(){
    if(seconds == 00){
        minutes = minutes - 1;
        printsOnScreen(1, minutes);
        seconds = 60;
        return;
    } else if(minutes == 00){
        hours = hours - 1;
        printsOnScreen(2, hours);
        minutes = 60;
        return;
    } else if(hours == 00){
        days = days - 1;
        printsOnScreen(3, days);
        hours = 23;
        return;
    } else if(seconds == 0 && minutes == 0 && hours == 00 && days == 00){
        clearInterval(interval);
        return;
    }
    seconds = seconds -1;
    printsOnScreen(0, seconds);
}

function printsOnScreen(index, variation){
    switch (index){
        case 0:
            spaceOfSeconds.innerHTML = String(variation).padStart(2, "0");
            return;
        case 1:
            spaceOfMinutes.innerHTML = String(variation).padStart(2, "0");
            return;
        case 2:
            spaceOfHours.innerHTML = String(variation).padStart(2, "0");
            return;
        case 3:
            spaceOfDays.innerHTML = String(variation).padStart(2, "0");
            return;
    }
}

// SHOW MENU
function showMenu(){
    floatingForm.classList.remove("hidden");
}

// HIDE MENU
function hideMenu(){
    floatingForm.classList.add("hidden");
}
