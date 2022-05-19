// ACTIVE OR DESATIVE MENU
function activeOrDesativeMenu(){
    const navElement = document.getElementsByTagName("nav")[0];
    navElement.classList.toggle('sidebar-expanded');
}

// SELECTED SECTION
const navList = document.querySelectorAll("nav ul li a");
navList[0].onclick = () => {activeSection(0)}
navList[1].onclick = () => {activeSection(1)}
navList[2].onclick = () => {activeSection(2)}
navList[3].onclick = () => {activeSection(3)}
navList[4].onclick = () => {activeSection(4)}
navList[5].onclick = () => {activeSection(5)}

function activeSection(indice){
    // Deactivates the previously selected section
    for(let i = 0; i < navList.length; i++){
        if(navList[i].getAttribute('class') === "active"){
            navList[i].classList.remove('active');
        }
    }
    // Activate the new selected section
    navList[indice].classList.add('active');
}