const audios = [
  {
    file: "나랑 아니면.mp3",
    singer: "The Black Skirts",
    title: "나랑 아니면",
    album: "teambaby.jpeg",
  },
  {
    file: "Antifreeze.mp3",
    title: "Antifreeze",
    singer: "The Black Skirts",
    album: "201.jpeg",
  },
  {
    file: "EVERYTHING.mp3",
    title: "EVERYTHING",
    singer: "The Black Skirts",
    album: "everything.jpeg",
  },
  {
    file: "I Like Watching You Go.mp3",
    title: "I Like Watching You Go",
    singer: "The Black Skirts",
    album: "201.jpeg",
  },
  {
    file: "International Love Song.mp3",
    title: "International Love Song",
    singer: "The Black Skirts",
    album: "dontyouworrybaby.jpeg",
  },
];

const audioPlayer = document.querySelector(".audio-container audio");
const playBtn = document.querySelector(".audio-control__play");
const forwordkBtn = document.querySelector(".audio-control__forword");
const backwordBtn = document.querySelector(".audio-control__backword");
const audioRange = document.querySelector("#audio-range__bar");
const current = document.querySelector(".audio-range__currnet");
const playTime = document.querySelector(".audio-range__playtime");
const albumImg = document.querySelector(".audio-album img");
const albumTitle = document.querySelector(".audio-album__title");
const albumSinger = document.querySelector(".audio-album__singer");
const playBtnIcon = document.querySelector(".audio-control__play i");

let playNumber = 0;
let range = 0;

function handlePalyBtn() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtnIcon.classList.remove("fa-play");
    playBtnIcon.classList.add("fa-pause");
  } else {
    audioPlayer.pause();
    playBtnIcon.classList.add("fa-play");
    playBtnIcon.classList.remove("fa-pause");
  }
}

function playUpdate(target) {
  audioPlayer.src = `audios/${audios[target].file}`;
  albumImg.src = `images/albums/${audios[target].album}`;
  albumTitle.innerText = audios[target].title;
  albumSinger.innerText = audios[target].singer;
  audioPlayer.play();
}

function handleForwordBtn() {
  if (playNumber < audios.length - 1) {
    playNumber = playNumber + 1;
  } else {
    playNumber = 0;
  }
  playUpdate(playNumber);
}

function handleBackwordBtn() {
  if (playNumber === 0) {
    playNumber = audios.length - 1;
  } else {
    playNumber = playNumber - 1;
  }
  playUpdate(playNumber);
}

audioPlayer.onloadedmetadata = () => {
  const totalTime = audioPlayer.duration;
  audioRange.max = totalTime;
  const timer = `${String(Math.floor(totalTime / 60)).padStart(
    2,
    "0"
  )}:${String(Math.floor(totalTime % 60)).padStart(2, "0")}`;
  playTime.innerText = timer;
};
audioPlayer.ontimeupdate = () => {
  const nowTime = audioPlayer.currentTime;
  const totalTime = audioPlayer.duration;
  audioRange.value = nowTime;
  const timer = `${String(Math.floor(nowTime / 60)).padStart(2, "0")}:${String(
    Math.floor(nowTime % 60)
  ).padStart(2, "0")}`;
  current.innerText = timer;

  const min = audioRange.min;
  const max = audioRange.max;
  const val = audioRange.value;
  audioRange.style.backgroundSize =
    ((val - min) * 100) / (max - min) + "% 100%";

  if (nowTime === totalTime) {
    setTimeout(handleForwordBtn, 2000);
  }
};
audioRange.onchange = () => {
  const rangeTime = audioRange.value;
  audioPlayer.currentTime = rangeTime;
  const timer = `${String(Math.floor(rangeTime / 60)).padStart(
    2,
    "0"
  )}:${String(Math.floor(rangeTime % 60)).padStart(2, "0")}`;
  current.innerText = timer;
};

playBtn.addEventListener("click", handlePalyBtn);
forwordkBtn.addEventListener("click", handleForwordBtn);
backwordBtn.addEventListener("click", handleBackwordBtn);

audioPlayer.src = `audios/${audios[0].file}`;
albumImg.src = `images/albums/${audios[0].album}`;
albumTitle.innerText = audios[0].title;
albumSinger.innerText = audios[0].singer;
