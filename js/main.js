"use strict"

import { Game } from "./game.js"

// Change the grid granularity here
const GRID_SIZE = 10; 

document.addEventListener("DOMContentLoaded", (event) => { 
    const game = new Game(GRID_SIZE);
});