// Variabelen
let selectedBlock = null;
let isErasing = false;
const gameArea = document.getElementById("game-area");
const blocks = document.querySelectorAll(".block");
const expandButton = document.getElementById("expandField");
const shrinkButton = document.getElementById("shrinkField");
const eraseButton = document.getElementById("enableEraser");
const resetButton = document.getElementById("resetGame");
const brightnessSlider = document.getElementById("brightness");
const settingsButton = document.getElementById("settingsButton");
const settingsMenu = document.getElementById("settingsMenu");
const closeSettingsButton = document.getElementById("closeSettings");

let gameCells = [];

// Functie om de cellen te creëren
function createCells(columns, rows) {
  gameArea.innerHTML = ''; // Verwijder bestaande cellen
  gameCells = [];
  
  for (let i = 0; i < columns * rows; i++) {
    const cell = document.createElement("div");
    cell.classList.add("game-cell");
    gameArea.appendChild(cell);
    gameCells.push(cell);
  }

  // Pas het grid toe op basis van het aantal kolommen en rijen
  gameArea.style.gridTemplateColumns = `repeat(${columns}, 
