"use strict"

import { ICONS } from "./cell.js";

export class UIManager {
    constructor() {
        this.startButton = document.getElementById("start-btn");
        this.startButton.disabled = true;
        this.startButton.innerHTML = "Loading...";
        this.gridTable = document.getElementById("grid");
        this.setupPixiContainer();
    }

    setupPixiContainer() {
        const pixiContainer = document.getElementById("pixi-container");
        this.pixiApp = new PIXI.Application({ width : pixiContainer.offsetWidth, height : pixiContainer.offsetHeight });
        pixiContainer.appendChild(this.pixiApp.view);
        this.pixiApp.renderer.autoResize = true;
        this.pixiApp.renderer.backgroundColor = 0xD7DBDD;
        window.onresize = () => this.pixiApp.renderer.resize(pixiContainer.offsetWidth, pixiContainer.offsetHeight);
        this.loadImagesToTextureCache();
    }

    loadImagesToTextureCache() {
        PIXI.loader
            .add(ICONS.WHITE.image)
            .add(ICONS.RED.image)
            .add(ICONS.BLUE.image)
            .add(ICONS.GREEN.image)
            .add(ICONS.YELLOW.image)
            .add(ICONS.PURPLE.image)
            .load(() => {
                this.startButton.innerHTML = "Start";
                this.startButton.disabled = false;
            });
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