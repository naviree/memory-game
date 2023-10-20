function buildTile(color) {
  const element = document.createElement("div");
  element.classList.add("tile");
  element.setAttribute("data-color", color);
  element.setAttribute("data-revealed", "false");
  element.addEventListener("click", tileClickHandler);
  return element;
}

function tileClickHandler() {
  const revealed = this.getAttribute("data-revealed");
  if (awaitingEndOfMove || revealed === "true" || this === activeTile) {
    return;
  }
  this.style.backgroundColor = this.getAttribute("data-color");
  if (!activeTile) {
    activeTile = this;
    return;
  }
  if (
    activeTile.getAttribute("data-color") === this.getAttribute("data-color")
  ) {
    activeTile.setAttribute("data-revealed", "true");
    this.setAttribute("data-revealed", "true");
    activeTile = null;
    awaitingEndOfMove = false;
    revealedCount += 2;
    if (revealedCount === tileCount) {
      alert("You win!!");
    }
  } else {
    incorrectMatches++;
    score.innerHTML = incorrectMatches;
    if (incorrectMatches >= maxAttempts) {
      alert("Game Over");
      resetTiles();
      return;
    }
    awaitingEndOfMove = true;
    setTimeout(() => {
      this.style.backgroundColor = null;
      activeTile.style.backgroundColor = null;
      awaitingEndOfMove = false;
      activeTile = null;
    }, 1000);
  }
}

function resetTiles() {
  tilesContainer.innerHTML = "";
  score.innerHTML = "0";
  incorrectMatches = 0;
  revealedCount = 0;
  activeTile = null;
  awaitingEndOfMove = false;
  colorsPickList = [...colors, ...colors];
  for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPickList.length);
    const color = colorsPickList.splice(randomIndex, 1)[0];
    const tile = buildTile(color);
    tilesContainer.append(tile);
    console.log(tilesContainer.innerHTML);
  }
}
