"use strict"

import { GridManager } from "./gridManager.js"
import { UIManager } from "./uiManager.js"

export class Game {
    constructor() {
        this.gridManager = new GridManager(10);
        this.uiManager = new UIManager();
        this.uiManager.startButton.addEventListener("mouseup", () => this.startNewGame());
    }

    startNewGame() {
        console.log("START!!");
        this.gridManager.generateRandomIcons();
        console.log(this.gridManager.grid);
    }
}