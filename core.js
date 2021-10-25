const robot = require("robotjs");

const moveClickAndWait = (x, y, delay) => {
    console.log('moveClickAndWait', x, y, delay)
    robot.setMouseDelay(Math.random() * 100 + 100);
    robot.moveMouse(x + 20 * Math.random() - 10, y + 20 * Math.random() - 10);
    robot.setMouseDelay(Math.random() * 100 + delay);
    robot.mouseClick();
}

const moveClick = (x, y) => {
    moveClickAndWait(x, y, 100);
}

const moveAndWait = (x, y, delay) => {
    robot.setMouseDelay(Math.random() * 10 + delay);
    robot.moveMouse(x + 3 * Math.random() - 3, y + 3 * Math.random() - 3);
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

module.exports = {
    moveClickAndWait,
    moveClick,
    moveAndWait,
    clickAndWait,
    keyAndWait
}
