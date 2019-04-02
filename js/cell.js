"use strict"

const NUMBER_OF_ICONS = 5;

export const ICONS = {
    WHITE : {
        image : "images/diamond_white.png",
        color : ""
    },
    RED : {
        image : "images/diamond_red.png",
        color : ""
    },
    BLUE : {
        image : "images/diamond_blue.png",
        color : ""
    },
    GREEN : {
        image : "images/diamond_green.png",
        color : ""
    },
    YELLOW : {
        image : "images/diamond_yellow.png",
        color : ""
    },
    PURPLE : {
        image : "images/diamond_purple.png",
        color : ""
    }
}

export class Cell {
    generateIconNumber() {
        this.iconNumber = Math.floor((Math.random() * NUMBER_OF_ICONS) + 1);
        this.highlighted = false;      
        this.assignIconImageAndColor();
    }

    assignIconImageAndColor() {
        switch(this.iconNumber)  {
            case 1: {
                this.icon = new PIXI.Sprite(PIXI.loader.resources[ICONS.RED.image].texture);
                this.bgColor = ICONS.RED.color;
                break;
            }
            case 2: {
                this.icon = new PIXI.Sprite(PIXI.loader.resources[ICONS.BLUE.image].texture);
                this.bgColor = ICONS.BLUE.color;
                break;
            }
            case 3: {
                this.icon = new PIXI.Sprite(PIXI.loader.resources[ICONS.GREEN.image].texture);
                this.bgColor = ICONS.GREEN.color;
                break;
            }
            case 4: {
                this.icon = new PIXI.Sprite(PIXI.loader.resources[ICONS.YELLOW.image].texture);
                this.bgColor = ICONS.YELLOW.color;
                break;
            }
            case 5: {
                this.icon = new PIXI.Sprite(PIXI.loader.resources[ICONS.PURPLE.image].texture);
                this.bgColor = ICONS.PURPLE.color;
                break;
            }
            default: {
                // In case you increase the number of icons.. you will se what is missing
                this.icon = new PIXI.Sprite(PIXI.loader.resources[ICONS.WHITE.image].texture);
                this.bgColor = ICONS.WHITE.color;
                break;
            }
        }
    }
}