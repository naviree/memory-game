const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "green","greenyellow", "teal"];
const colorsPickList = [...colors, ...colors];
const tileCount = colorsPickList.length;

let revealedCount = 0;
