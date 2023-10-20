for (let i = 0; i < tileCount; i++) {
  const randomIndex = Math.floor(Math.random() * colorsPickList.length);
  const color = colorsPickList.splice(randomIndex, 1)[0];
  const tile = buildTile(color);
  tilesContainer.append(tile);
}

document.getElementById("resetButton").addEventListener("click", resetTiles);

document
  .getElementById("difficultySelector")
  .addEventListener("change", function (event) {
    currentDifficulty = event.target.value;
    maxAttempts = difficultyLevels[currentDifficulty];
  });
