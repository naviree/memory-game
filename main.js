const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "green","greenyellow", "teal"];
const colorsPickList = [...colors, ...colors];
const tileCount = colorsPickList.length;

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
    const element = document.createElement("div");

    element.classList.add("tile");
}

// Build up tiles

for(let i = 0; i < tileCount; i++){
    const randomIndex = Math.floor(Math.random () * colorsPickList.length);
    const color = colorsPickList[randomIndex];

    colorsPickList.splice(randomIndex, 1);


    console.log(color)
}