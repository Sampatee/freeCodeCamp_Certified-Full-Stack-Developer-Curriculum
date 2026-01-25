const padbank = document.querySelector("#pad-bank");
const display = document.querySelector("#display");

const handleDrumPadClick = (e) => {
  if (!e.target.classList.contains("drum-pad")) {
    return;
  }

  const audioEl = e.target.querySelector("audio");

  audioEl.play();
  display.textContent = e.target.id.replaceAll("-", " ");
};

const handleKeyPress = (e) => {
  const audioEl = document.querySelector(`#${e.key.toUpperCase()}`);

  audioEl?.play();
  display.textContent = audioEl?.parentElement.id.replaceAll("-", " ");
};

padbank.addEventListener("click", handleDrumPadClick);
document.addEventListener("keydown", handleKeyPress);
