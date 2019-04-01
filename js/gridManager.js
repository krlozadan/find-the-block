"use strict"

import { Cell } from "./cell.js";

export class GridManager {
    constructor(n) {
        this.gridSize = n;
        this.grid = Array(this.gridSize);
        for (let i = 0; i < this.gridSize ; i++) {
            const gridRow = Array(this.gridSize);
            this.grid[i] = gridRow;
            for (let j = 0;j < this.gridSize; j++) {
                // Fill it with null to always use the same grid and prevent having to create a new grid every time
                this.grid[i][j] = null;
            }
        }
    }

    generateRandomIcons() {
        for (let i = 0; i < this.gridSize ; i++) {
            for (let j = 0;j < this.gridSize; j++) {
                this.grid[i][j] = new Cell(Math.floor((Math.random() * 5) + 1));
            }
        }
    }    
}