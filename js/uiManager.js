"use strict"

export class UIManager {
    constructor() {
        this.startButton = document.getElementById("start-btn");
        this.gridTable = document.getElementById("grid");
        this.setupPixi();
    }

    setupPixi() {
        const pixiContainer = document.getElementById("pixi-container");
        this.pixiApp = new PIXI.Application({ width : pixiContainer.offsetWidth, height : pixiContainer.offsetHeight });
        pixiContainer.appendChild(this.pixiApp.view);
        this.pixiApp.renderer.autoResize = true;
        window.onresize = () => this.pixiApp.renderer.resize(pixiContainer.offsetWidth, pixiContainer.offsetHeight);
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