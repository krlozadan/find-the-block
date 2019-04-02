"use strict"

const NUMBER_OF_ICONS = 5;

export const ICONS = {
    WHITE : {
        image : "images/diamond_white.png"
    },
    RED : {
        image : "images/diamond_red.png",
        imageHighlighted : "images/diamond_red_fill.png"
    },
    BLUE : {
        image : "images/diamond_blue.png",
        imageHighlighted : "images/diamond_blue_fill.png"
    },
    GREEN : {
        image : "images/diamond_green.png",
        imageHighlighted : "images/diamond_green_fill.png"
    },
    YELLOW : {
        image : "images/diamond_yellow.png",
        imageHighlighted : "images/diamond_yellow_fill.png"
    },
    PURPLE : {
        image : "images/diamond_purple.png",
        imageHighlighted : "images/diamond_purple_fill.png"
    }
}

export class Cell {
    
    constructor() {
        // This prevents jhaving to create a Sprite upon each simulation
        this.icon = new PIXI.Sprite(PIXI.loader.resources[ICONS.WHITE.image].texture);
    }

    initCellSprite() {
        this.sprite = new PIXI.Sprite(new PIXI.Sprite(PIXI.loader.resources[ICONS.WHITE.image].texture));
    }

    generateIconNumber() {
        this.iconNumber = Math.floor((Math.random() * NUMBER_OF_ICONS) + 1);
        this.highlighted = false;      
    }

    // Set the testure depending on the icon number
    setTexture() {
        switch(this.iconNumber)  {
            case 1: {
                this.icon.texture = this.highlighted ? PIXI.loader.resources[ICONS.RED.imageHighlighted].texture : PIXI.loader.resources[ICONS.RED.image].texture;
                break;
            }
            case 2: {
                this.icon.texture = this.highlighted ? PIXI.loader.resources[ICONS.BLUE.imageHighlighted].texture : PIXI.loader.resources[ICONS.BLUE.image].texture;
                break;
            }
            case 3: {
                this.icon.texture = this.highlighted ? PIXI.loader.resources[ICONS.GREEN.imageHighlighted].texture : PIXI.loader.resources[ICONS.GREEN.image].texture;
                break;
            }
            case 4: {
                this.icon.texture = this.highlighted ? PIXI.loader.resources[ICONS.YELLOW.imageHighlighted].texture : PIXI.loader.resources[ICONS.YELLOW.image].texture;
                break;
            }
            case 5: {
                this.icon.texture = this.highlighted ? PIXI.loader.resources[ICONS.PURPLE.imageHighlighted].texture : PIXI.loader.resources[ICONS.PURPLE.image].texture;
                break;
            }
        }
    }
}