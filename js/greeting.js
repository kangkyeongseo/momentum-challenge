const greetingForm = document.querySelector(".greeting-form");
const greetingInput = greetingForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const greetingName = greeting.querySelector("span");
const logoutBtn = greeting.querySelector("button");

const HIDDEN = "hidden";
const USERNAME = "username";

function handleLogoutClick() {
    localStorage.removeItem(USERNAME);
    greeting.classList.add(HIDDEN);
    greetingForm.classList.remove(HIDDEN);  
}

function printUserName(name) {
    greetingName.innerText = `Hello ${name}!`;
    greeting.classList.remove(HIDDEN);
    greetingForm.classList.add(HIDDEN);
    logoutBtn.addEventListener("click", handleLogoutClick);
}

function handleGreetingSubmit(event) {
    event.preventDefault();
    const userName = greetingInput.value;
    localStorage.setItem(USERNAME, userName);
    greetingInput.value = "";
    printUserName(userName)
};

const savedUserName = localStorage.getItem(USERNAME);

if(savedUserName !== null) {
    printUserName(savedUserName);
}else {
    greetingForm.addEventListener("submit", handleGreetingSubmit);
}