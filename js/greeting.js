const greetingForm = document.querySelector(".greeting-form");
const greetingInput = greetingForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const greetingName = greeting.querySelector("span");
const logoutBtn = document.querySelector(".logout-btn");

const HIDDEN = "hidden";
const HIDDEN_VISIBILTY = "hidden--visibility";
const USERNAME = "username";

function handleLogoutClick() {
  localStorage.removeItem(USERNAME);
  greeting.classList.add(HIDDEN_VISIBILTY);
  greetingForm.classList.remove(HIDDEN_VISIBILTY);
  greetingForm.classList.remove(HIDDEN);
  greetingForm.addEventListener("submit", handleGreetingSubmit);
}

function printUserName(name) {
  greetingName.innerText = `Hello ${name}!`;
  greeting.classList.remove(HIDDEN_VISIBILTY);
  greetingForm.classList.add(HIDDEN_VISIBILTY);
  logoutBtn.addEventListener("click", handleLogoutClick);
}

function handleGreetingSubmit(event) {
  event.preventDefault();
  const userName = greetingInput.value;
  localStorage.setItem(USERNAME, userName);
  greetingInput.value = "";
  printUserName(userName);
}

const savedUserName = localStorage.getItem(USERNAME);

if (savedUserName !== null) {
  printUserName(savedUserName);
  greetingForm.classList.add(HIDDEN);
  logoutBtn.addEventListener("click", handleLogoutClick);
} else {
  greetingForm.addEventListener("submit", handleGreetingSubmit);
}
