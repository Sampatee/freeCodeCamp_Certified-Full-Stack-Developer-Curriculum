const headCoachElement = document.querySelector("#head-coach");
const teamElement = document.querySelector("#team");
const yearElement = document.querySelector("#year");
const filterElement = document.querySelector("#players");

const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

headCoachElement.textContent = footballTeam.headCoach;
teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;

const renderPlayerCards = (players) => {
  const playerCardsElement = document.querySelector("#player-cards");
  playerCardsElement.innerHTML = "";

  players.forEach(({ name, position, isCaptain }) => {
    playerCardsElement.innerHTML += `<div class="player-card">
    <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
    <p>Position: ${position}</p>
    </div>
    `;
  });
};

const filterPlayers = (players) => {
  const selectedPosition = filterElement.value;
  const filteredList = players.filter(
    (player) => player.position === selectedPosition
  );

  renderPlayerCards(selectedPosition === "all" ? players : filteredList);
};

renderPlayerCards(footballTeam.players);
filterElement.addEventListener("change", () =>
  filterPlayers(footballTeam.players)
);