let button = document.getElementById("menuIcon");
let menu = document.getElementById("menuBlock");

button.addEventListener("click", showMenu)

let clickCounter = 0;

function showMenu() {
    clickCounter += 1;     
    
    if (clickCounter > 0 && clickCounter % 2 != 0) {
        menu.style.visibility = "visible";
    }
    
    else if (clickCounter % 2 == 0) {
        menu.style.visibility = "hidden";
    }
}