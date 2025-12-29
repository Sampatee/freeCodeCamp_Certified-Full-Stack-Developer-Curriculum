const questions = [
  {
    category: "Music",
    question:
      "Who sang the title song for the latest Bond film, No Time to Die?",
    choices: ["Adele", "Sam Smith", "Billie Eilish"],
    answer: "Billie Eilish",
  },
  {
    category: "Country",
    question:
      "Which flies a green, white, and orange (in that order) tricolor flag? ",
    choices: ["Ireland", "Ivory Coast", "Italy"],
    answer: "Ireland",
  },
  {
    category: "Tech",
    question: "What company makes the Xperia model of smartphone?",
    choices: ["Samsung", "Sony", "Nokia"],
    answer: "Sony",
  },
  {
    category: "Geography",
    question: "Which city is home to the Brandenburg Gate?",
    choices: ["Vienna", "Zurich", "Berlin"],
    answer: "Berlin",
  },
  {
    category: "Fruits",
    question: "Which of the following is NOT a fruit?",
    choices: ["Rhubarb", "Tomatoes", "Avocados"],
    answer: "Rhubarb",
  },
];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomQuestion = (questions) => getRandomElement(questions);

const getRandomComputerChoice = (choices) => getRandomElement(choices);

const getResults = (question, compChoice) =>
  compChoice === question.answer
    ? "The computer's choice is correct!"
    : `The computer's choice is wrong. The correct answer is: ${question.answer}`;
