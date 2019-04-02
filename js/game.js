"use strict"

import { GridManager } from "./gridManager.js"
import { UIManager } from "./uiManager.js"

export class Game {
    constructor(n) {
        this.uiManager = new UIManager();
        this.gridManager = new GridManager(n);
        this.uiManager.initDisplay(this.gridManager.grid);
        this.uiManager.startButton.addEventListener("mouseup", () => this.startNewGame());
    }
    
    startNewGame() {
        this.gridManager.generateRandomIcons();
        this.gridManager.highlightIconBlocks();
        this.uiManager.refreshDisplay(this.gridManager.grid);
    }
}