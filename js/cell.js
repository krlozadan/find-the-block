"use strict"

export const DIAMONDS = {
    WHITE : "images/diamond_white.png",
    RED : "images/diamond_red.png",
    BLUE : "images/diamond_blue.png",
    GREEN : "images/diamond_green.png",
    YELLOW : "images/diamond_yellow.png",
    PURPLE : "images/diamond_purple.png"
}

export class Cell {
    constructor(iconNumber) {
        this.iconNumber = iconNumber;
        this.highlighted = false;
    }
}