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
        this.gridManager.generateRandomIcons();
        this.uiManager.displayGrid(this.gridManager.grid);
    }
}