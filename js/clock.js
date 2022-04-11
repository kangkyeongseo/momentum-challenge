const clockCotainer = document.querySelector(".clock");
const clockBlock = document.createElement("span");

function getTimeHandler(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");;
    const seconds = String(date.getSeconds()).padStart(2, "0");;
    
    clockBlock.innerText = `${hours}:${minutes}:${seconds}`;    
    clockCotainer.appendChild(clockBlock);  
};

getTimeHandler();
setInterval(getTimeHandler, 1000);