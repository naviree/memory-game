// main.js

const resetContent = document.querySelector(".tiles");
const tilesContainer = document.querySelector(".tiles");
const score = document.getElementById("total-score");

const colors = [
  "#DB93B0",
  "#9E2B25",
  "#F3FFBD",
  "#87B6A7",
  "#467599",
  "#5B4B49",
  "#C5C5C5",
  "#F79F79",
];

let colorsPickList = [...colors, ...colors];
const tileCount = colorsPickList.length;

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;
let incorrectMatches = 0;

const difficultyLevels = {
  easy: 20,
  medium: 10,
  hard: 5,
};

let currentDifficulty = "medium";
let maxAttempts = difficultyLevels[currentDifficulty];
