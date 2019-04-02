"use strict"

import { GridManager } from "./gridManager.js"
import { UIManager } from "./uiManager.js"

export class Game {
    constructor(n) {
        this.gridManager = new GridManager(n);
        this.uiManager = new UIManager();
        this.uiManager.startButton.addEventListener("mouseup", () => this.startNewGame());
    }
    
    startNewGame() {
        this.gridManager.generateRandomIcons();
        this.gridManager.highlightIconBlocks();
        this.uiManager.displayGrid(this.gridManager.grid);
    }
}