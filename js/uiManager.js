"use strict"

import { ICONS } from "./cell.js";

export class UIManager {
    constructor() {
        // Disable the button until the texture cache is done
        this.startButton = document.getElementById("start-btn");
        this.startButton.disabled = true;
        this.startButton.innerHTML = "Loading...";
        // Get a reference to the needed DOM elements
        this.pixiContainer = document.getElementById("pixi-container");
        this.gridTable = document.getElementById("grid");
        this.setupPixiContainer();
    }

    // Initializes PIXI App
    setupPixiContainer() {
        this.pixiApp = new PIXI.Application({ width : this.pixiContainer.offsetWidth, height : this.pixiContainer.offsetHeight });
        this.pixiContainer.appendChild(this.pixiApp.view);
        this.pixiApp.renderer.autoResize = true;
        this.pixiApp.renderer.backgroundColor = 0xffffff;
        window.onresize = () => this.pixiApp.renderer.resize(this.pixiContainer.offsetWidth, this.pixiContainer.offsetHeight);
        this.loadImagesToTextureCache();
    }

    loadImagesToTextureCache() {
        PIXI.loader
            .add(ICONS.WHITE.image)
            .add(ICONS.RED.image)
            .add(ICONS.RED.imageHighlighted)
            .add(ICONS.BLUE.image)
            .add(ICONS.BLUE.imageHighlighted)
            .add(ICONS.GREEN.image)
            .add(ICONS.GREEN.imageHighlighted)
            .add(ICONS.YELLOW.image)
            .add(ICONS.YELLOW.imageHighlighted)
            .add(ICONS.PURPLE.image)
            .add(ICONS.PURPLE.imageHighlighted)
            .load(() => {
                // When everything loads the button is activated
                this.startButton.innerHTML = "Start";
                this.startButton.disabled = false;
            });
    }

    // Sets up the grid in the canvas
    initDisplay(grid) {
        const spaceBetweenIcons = this.pixiContainer.offsetHeight / grid.length;
        const leftMargin = (this.pixiContainer.offsetWidth - (spaceBetweenIcons * grid.length)) / 2;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                const icon = grid[i][j].icon;
                this.pixiApp.stage.addChild(icon);
                icon.y = spaceBetweenIcons * i;
                icon.x = spaceBetweenIcons * j + leftMargin;
            }
        }
    }

    // Updates the view to reflect the new results
    refreshDisplay(grid) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                grid[i][j].setTexture();
            }
        }
    }
}