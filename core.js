const robot = require("robotjs");

class Coords {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const moveClickAndWait = (coord, delay) => {
    console.log('moveClickAndWait', coord.x, coord.y, delay)
    robot.setMouseDelay(Math.random() * 100 + 100);
    robot.moveMouse(coord.x + 20 * Math.random() - 10, coord.y + 20 * Math.random() - 10);
    robot.setMouseDelay(Math.random() * 100 + delay);
    robot.mouseClick();
}

const moveClick = (coord) => {
    moveClickAndWait(coord.x, coord.y, 100);
}

const moveAndWait = (coord, delay) => {
    robot.setMouseDelay(Math.random() * 10 + delay);
    robot.moveMouse(coord.x + 3 * Math.random() - 3, coord.y + 3 * Math.random() - 3);
}

const clickAndWait = (delay) => {
    robot.setMouseDelay(Math.random() * 10 + delay);
    robot.mouseClick();
}

const keyAndWait = (key, delay) => {
    console.log('keyAndWait', key, delay)
    robot.setKeyboardDelay(Math.random() * 0.1 * delay + delay);
    robot.keyTap(key);
}
const keyToggleAndWait = (key, down, delay) => {
    console.log('keyToggleAndWait', key, delay)
    robot.setKeyboardDelay(Math.random() * 0.1 * delay + delay);
    robot.keyToggle(key, down);
}

module.exports = {
    moveClickAndWait,
    moveClick,
    moveAndWait,
    clickAndWait,
    keyAndWait,
    keyToggleAndWait,
    Coords
}
