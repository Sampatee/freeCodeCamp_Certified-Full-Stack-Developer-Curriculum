const themeBtn = document.querySelector("#theme-switcher-button");
const themeMenu = document.querySelector("#theme-dropdown");
const themeMsgContainer = document.querySelector("#status");

const themes = [
  { name: "shine", message: "Welcome to Shiny Sunlight." },
  { name: "noir", message: "Dive deep in the Noir." },
];

const handleThemeBtnClick = () => {
  themeMenu.hidden = !themeMenu.hidden;
  themeBtn.ariaExpanded = `${!themeMenu.hidden}`;
};

const handleThemeSelect = (e) => {
  document.body.setAttribute("class", e.target.id);

  const themeMsg = document.createElement("p");
  themeMsg.textContent = themes.find(
    (theme) => theme.name === e.target.textContent.toLowerCase()
  ).message;
  themeMsgContainer.innerHTML = "";
  themeMsgContainer.appendChild(themeMsg);

  handleThemeBtnClick();
};

themeBtn.addEventListener("click", handleThemeBtnClick);
themeMenu.addEventListener("click", handleThemeSelect);
