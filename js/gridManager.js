"use strict"

import { Cell } from "./cell.js";

export class GridManager {
    // Initializes the cells
    constructor(n) {
        this.gridSize = n;
        this.grid = Array(this.gridSize);
        for (let i = 0; i < this.gridSize ; i++) {
            const gridRow = Array(this.gridSize);
            this.grid[i] = gridRow;
            for (let j = 0;j < this.gridSize; j++) {
                this.grid[i][j] = new Cell();
            }
        }
    }

    generateRandomIcons() {
        for (let i = 0; i < this.gridSize ; i++) {
            for (let j = 0;j < this.gridSize; j++) {
                this.grid[i][j].generateIconNumber();
            }
        }
    }    

    // Loop through the cells and check their siblings
    highlightIconBlocks() {
        for (let i = 0;i < this.grid.length;i++) {
            for (let j = 0;j < this.grid.length;j++) {
                if (this.grid[i][j].highlighted == false) {
                    const block = this.getCellSiblings(i,j);
                    if (block.length < 5 && block.length > 0) {
                        block.forEach(cell => {
                            this.grid[cell[0]][cell[1]].highlighted = false;
                        });
                    }
                }
            }
        }
    }

    // Here's the main algorithm using recursion to get the siblings
    getCellSiblings(x, y) {
        const siblings = [];
        const currentCell = this.grid[x][y];
        
        // Will check top sibling
        if (x > 0) {
            const checkingCell = this.grid[x - 1][y];
            if (currentCell.iconNumber == checkingCell.iconNumber && checkingCell.highlighted == false) {
                this.grid[x - 1][y].highlighted = true;
                siblings.push([x - 1,y]);
                this.getCellSiblings(x - 1,y).forEach(sibling => siblings.push(sibling));
            }
        }

        // Will check down sibling
        if (x < this.grid.length - 1) {
            const checkingCell = this.grid[x + 1][y];
            if (currentCell.iconNumber == checkingCell.iconNumber && checkingCell.highlighted == false) {
                this.grid[x + 1][y].highlighted = true;
                siblings.push([x + 1,y]);
                this.getCellSiblings(x + 1,y).forEach(sibling => siblings.push(sibling));
            }
        }

        // Will check left sibling
        if (y > 0) {
            const checkingCell = this.grid[x][y -1];
            if (currentCell.iconNumber == checkingCell.iconNumber && checkingCell.highlighted == false) {
                this.grid[x][y - 1].highlighted = true;
                siblings.push([x,y - 1]);
                this.getCellSiblings(x,y - 1).forEach(sibling => siblings.push(sibling));
            }
        }

        // Will check right sibling
        if (y < this.grid.length - 1) {
            const checkingCell = this.grid[x][y + 1];
            if (currentCell.iconNumber == checkingCell.iconNumber && checkingCell.highlighted == false) {
                this.grid[x][y + 1].highlighted = true;
                siblings.push([x,y + 1]);
                this.getCellSiblings(x,y + 1).forEach(sibling => siblings.push(sibling));
            }
        }

        return siblings;
    }
}