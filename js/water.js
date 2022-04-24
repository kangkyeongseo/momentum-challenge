const waterTitle = document.querySelector(".water-container__title");
const waterGauge = document.querySelector(".water-gauge");
const setController = document.querySelector(".water-controller__set");
const goController = document.querySelector(".water-controller__go");
const setForm = document.querySelector(".water-controller__set form");
const goForm = document.querySelector(".water-controller__go form");
const resetBtn = document.querySelector(".water-controller__reset");

const HIDDEN_CLASS = "hidden";
const WATER = "water";

function saveAngle(goal) {
  localStorage.setItem(WATER, JSON.stringify(goal));
}

function printAngle(goal) {
  const angle = (goal.amount / (goal.goal * 1000)) * 180;
  if (angle <= 180) {
    waterGauge.style.transform = `rotate(${angle}deg)`;
    waterTitle.innerText = `${goal.amount / 1000}L / ${goal.goal}L`;
  } else {
    waterGauge.style.transform = `rotate(180deg)`;
    waterTitle.innerText = `${goal.goal}L / ${goal.goal}L`;
  }
}

function handleResetBtn() {
  console.log(1);
  localStorage.removeItem(WATER);
  setController.classList.remove(HIDDEN_CLASS);
  goController.classList.add(HIDDEN_CLASS);
  waterGauge.style.transform = `rotate(0deg)`;
  waterTitle.innerText = "수분 목표량";
}

function handleGoForm(event, goal) {
  event.preventDefault();
  const seletedAmountBtm = event.submitter.value;
  const seletedAmount = parseInt(seletedAmountBtm.substring(0, 3));
  goal.amount = goal.amount + seletedAmount;
  saveAngle(goal);
  printAngle(goal);
}

function handleSetForm(event) {
  event.preventDefault();
  const seletedBtn = event.submitter.value;
  let goal = {
    goal: parseInt(seletedBtn.charAt(0)),
    amount: 0,
  };
  saveAngle(goal);

  waterTitle.innerText = `0/${goal.goal}L`;

  setController.classList.add(HIDDEN_CLASS);
  goController.classList.remove(HIDDEN_CLASS);

  resetBtn.addEventListener("click", handleResetBtn);
  goForm.addEventListener("submit", (event) => handleGoForm(event, goal));
}

const savedGoal = localStorage.getItem(WATER);

if (savedGoal) {
  const paredGoal = JSON.parse(savedGoal);
  printAngle(paredGoal);

  setController.classList.add(HIDDEN_CLASS);
  goController.classList.remove(HIDDEN_CLASS);

  resetBtn.addEventListener("click", handleResetBtn);
  goForm.addEventListener("submit", (event) => handleGoForm(event, paredGoal));
}
setForm.addEventListener("submit", handleSetForm);
