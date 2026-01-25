//THIS IS ALSO APPROVED BY fCC TESTS

const padbank = document.querySelector("#pad-bank");
const display = document.querySelector("#display");
const pwrBtn = document.querySelector("#pwr-btn");
const bnkBtn = document.querySelector("#bnk-btn");
const volumeInput = document.querySelector("#volume");

let isPowerOn = true;
let isHtrBnkOn = true;

const sounds = [
  {
    drumName: "Heater 1",
    fileName: "Heater-1.mp3",
    category: "Heater Kit",
  },
  {
    drumName: "Heater 2",
    fileName: "Heater-2.mp3",
    category: "Heater Kit",
  },
  {
    drumName: "Heater 3",
    fileName: "Heater-3.mp3",
    category: "Heater Kit",
  },
  {
    drumName: "Heater 4",
    fileName: "Heater-4_1.mp3",
    category: "Heater Kit",
  },
  {
    drumName: "Clap",
    fileName: "Heater-6.mp3",
    category: "Heater Kit",
  },
  {
    drumName: "Open-HH",
    fileName: "Dsc_Oh.mp3",
    category: "Heater Kit",
  },
  {
    drumName: "Kick-n'-Hat",
    fileName: "Kick_n_Hat.mp3",
    category: "Heater Kit",
  },
  {
    drumName: "Kick",
    fileName: "RP4_KICK_1.mp3",
    category: "Heater Kit",
  },
  {
    drumName: "Closed-HH",
    fileName: "Cev_H2.mp3",
    category: "Heater Kit",
  },
  {
    drumName: "Chord 1",
    fileName: "Chord_1.mp3",
    category: "Smooth Piano Kit",
  },
  {
    drumName: "Chord 1",
    fileName: "Chord_2.mp3",
    category: "Smooth Piano Kit",
  },
  {
    drumName: "Chord 1",
    fileName: "Chord_3.mp3",
    category: "Smooth Piano Kit",
  },
  {
    drumName: "Shaker",
    fileName: "Give_us_a_light.mp3",
    category: "Smooth Piano Kit",
  },
  {
    drumName: "Open-HH",
    fileName: "Dry_Ohh.mp3",
    category: "Smooth Piano Kit",
  },
  {
    drumName: "Closed-HH",
    fileName: "Bld_H1.mp3",
    category: "Smooth Piano Kit",
  },
  {
    drumName: "Punchy-Kick",
    fileName: "punchy_kick_1.mp3",
    category: "Smooth Piano Kit",
  },
  {
    drumName: "Side-Stick",
    fileName: "side_stick_1.mp3",
    category: "Smooth Piano Kit",
  },
  {
    drumName: "Snare",
    fileName: "Brk_Snr.mp3",
    category: "Smooth Piano Kit",
  },
];

const handleDrumPadClick = (e) => {
  if (!e.target.classList.contains("drum-pad") || !isPowerOn) {
    return;
  }

  const audioEl = e.target.querySelector("audio");

  //pause if already playing, then play
  //ensures multiple clicks
  audioEl.pause();
  audioEl.currentTime = 0;
  audioEl.play();

  display.textContent = e.target.id.replaceAll("-", " ");

  //style .drum-pad for active-state(click simulation via keypress)
  e.target.classList.add("active");
  setTimeout(() => {
    e.target.classList.remove("active");
  }, 100);
};

const handleKeyPress = (e) => {
  const audioEl = document.querySelector(`#${e.key.toUpperCase()}`);

  audioEl?.parentElement.click(); //simulate .drum-pad click on keypress
};

const handlePwrBtnClick = () => {
  //toggle power flag
  isPowerOn = !isPowerOn;
  document.querySelector("#pwr-status").textContent = isPowerOn ? "On" : "Off";
  display.textContent = "";
  pwrBtn.children[0].classList.toggle("btn-off"); //style btn-off
  padbank.classList.toggle("power-off", !isPowerOn);
};

const handleBnkBtnClick = () => {
  //toggle bnk category flag
  isHtrBnkOn = !isHtrBnkOn;
  const bnkName = isHtrBnkOn ? "Heater Kit" : "Smooth Piano Kit";

  document.querySelector("#bnk-name").textContent = bnkName;
  display.textContent = "";
  bnkBtn.children[0].classList.toggle("btn-off"); //style btn-off

  changeDrumData(bnkName);
};

const changeDrumData = (category) => {
  const filteredSoundsArr = sounds.filter(
    (sound) => sound.category === category,
  );

  //change arum audio data according to filtered category
  padbank.querySelectorAll(".drum-pad").forEach((drumPad, i) => {
    drumPad.id = filteredSoundsArr[i].drumName;
    drumPad.querySelector("audio").src =
      `https://cdn.freecodecamp.org/curriculum/drum/${filteredSoundsArr[i].fileName}`;
  });
};

const handleVolumeChange = () => {
  display.textContent = `Volume: ${volumeInput.value}`;
  changeVolume(); //debounced changeVolume func. to avoid multiple calls (activates after 1s of no-input)
};

//debouncer
const debouncedFunc = (fn, delay) => {
  let timerId = null;
  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn();
    }, delay);
  };
};

//No-delay func, wrap this inside a debounced function for delay
const setVolume = () => {
  const prefferedVolume = Number(volumeInput.value) / 100;
  document
    .querySelectorAll("audio")
    .forEach((audio) => (audio.volume = prefferedVolume)); //set volume value to audio elements
};

const changeVolume = debouncedFunc(() => {
  setVolume(); //to set volume after a delay when user inputs volume
  display.textContent = "";
}, 1000);

setVolume(); //initialize volume on page load with default volumeInput.value

padbank.addEventListener("click", handleDrumPadClick);
document.addEventListener("keydown", handleKeyPress);
pwrBtn.addEventListener("click", handlePwrBtnClick);
bnkBtn.addEventListener("click", handleBnkBtnClick);
volumeInput.addEventListener("input", handleVolumeChange);
