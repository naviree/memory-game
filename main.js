const resetContent = document.querySelector(".tiles");
const tilesContainer = document.querySelector(".tiles");
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
const colorsPickList = [...colors, ...colors];
const tileCount = colorsPickList.length;
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
  const element = document.createElement("div");

  element.classList.add("tile");
  element.setAttribute("data-color", color);
  element.setAttribute("data-revealed", "false");

  element.addEventListener("click", () => {
    const revealed = element.getAttribute("data-revealed");

    if (awaitingEndOfMove || revealed === "true" || element === activeTile) {
      return;
    }

    element.style.backgroundColor = color;

    if (!activeTile) {
      activeTile = element;

      return;
    }

    const colorToMatch = activeTile.getAttribute("data-color");

    if (colorToMatch === color) {
      activeTile.setAttribute("data-revealed", "true");
      element.setAttribute("data-revealed", "true");

      activeTile = null;
      awaitingEndOfMove = false;
      revealedCount += 2;

      if (revealedCount === tileCount) {
        alert("You win! Refresh to play again.");
      }
      return;
    }

    awaitingEndOfMove = true;

    setTimeout(() => {
      element.style.backgroundColor = null;
      activeTile.style.backgroundColor = null;

      awaitingEndOfMove = false;
      activeTile = null;
    }, 1000);
  });

  return element;
}

function resetTiles() {
  // Clear the tilesContainer
  tilesContainer.innerHTML = '';

  // Reset game state
  revealedCount = 0;
  activeTile = null;
  awaitingEndOfMove = false;

  // Restore the original colors pick list
  const resetColorsPickList = [...colors, ...colors];

  // Rebuild tiles
  for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * resetColorsPickList.length);
    const color = resetColorsPickList[randomIndex];
    const tile = buildTile(color);

    resetColorsPickList.splice(randomIndex, 1);
    tilesContainer.append(tile);
  }
}

document.getElementById('resetButton').addEventListener('click', resetTiles);
// Build up tiles

for (let i = 0; i < tileCount; i++) {
  const randomIndex = Math.floor(Math.random() * colorsPickList.length);
  const color = colorsPickList[randomIndex];
  const tile = buildTile(color);

  colorsPickList.splice(randomIndex, 1);
  tilesContainer.append(tile);
}
