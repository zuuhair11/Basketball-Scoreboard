// Aceess to boxes value
const boxHome  = document.querySelector('.boxHome');
const boxGuest = document.querySelector('.boxGuest');

// Results for both 
let homeResult  = 0;
let guestResult = 0;

// Home
function addOneToHome() {
    homeResult += 1;
    boxHome.textContent = homeResult;
}

function addTwoToHome() {
    homeResult += 2;
    boxHome.textContent = homeResult;
}

function addTreeToHome() {
    homeResult += 3;
    boxHome.textContent = homeResult;
}

// Guest
function addOneToGuest() {
    guestResult += 1;
    boxGuest.textContent = guestResult;
}

function addTwoToGuest() {
    guestResult += 2;
    boxGuest.textContent = guestResult;
}

function addTreeToGuest() {
    guestResult += 3;
    boxGuest.textContent = guestResult;
}


