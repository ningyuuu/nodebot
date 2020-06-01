const robot = require("robotjs");

const runs = 18;

const moveClickAndWait = (x, y, delay) => {
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(x + 3 * Math.random() - 3, y + 3 * Math.random() - 3);
    robot.setMouseDelay(Math.random() * 10 + delay);
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
    robot.setKeyboardDelay(Math.random() * 3000 + delay);
    robot.keyTap(key);
}

for (let i = 0; i < runs; i++) {
    console.log(`Superheat run no: ${i+1}/${runs}`);
    moveClick(3520, 296);
    moveClick(3520, 296);
    moveClickAndWait(3520, 296, 2000);
    keyAndWait('f3', 1000);
    moveAndWait(4449, 612, 1000);

    for (let j = 0; j < 29; j++) {
        keyAndWait('pagedown', 600);
        moveClickAndWait(4448, 612, 700);
    }
}
