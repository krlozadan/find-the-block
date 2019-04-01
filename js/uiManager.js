"use strict"

export class UIManager {
    constructor() {
        this.startButton = document.getElementById("start-btn");
        this.gridTable = document.getElementById("grid");
    }

    displayGrid(grid) {
        let markup = "";
        for (let i = 0; i < grid.length; i++) {
            markup += "<tr>";
            for (let j = 0; j < grid.length; j++) {
                markup += `<td class="icon icon-${grid[i][j].iconNumber} ${grid[i][j].highlighted ? "highlight" : ""}"></td>`;
            }
            markup += "</tr>";
        }
        this.gridTable.innerHTML = markup;
    }
}