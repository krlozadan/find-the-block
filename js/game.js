"use strict"

import { GridManager } from "./gridManager.js"

export class Game {
    constructor() {
        this.gridManager = new GridManager(10);
        this.gridManager.generateRandomIcons();
    }
}