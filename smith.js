const robot = require("robotjs");


const moveClickAndWait = (x, y, delay) => {
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(x + 3 * Math.random() - 3, y + 3 * Math.random() - 3);
    robot.setMouseDelay(Math.random() * 10 + delay);
    robot.mouseClick();
}

const moveClick = (x, y) => {
    moveClickAndWait(x, y, 100);
}

const moveRightClick = (x, y) => {
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(x + 3 * Math.random() - 3, y + 3 * Math.random() - 3);
    robot.setMouseDelay(Math.random() * 10 + 1000);
    robot.mouseClick('right');
}

const moveAndWait = (x, y, delay) => {
    robot.setMouseDelay(Math.random() * 10 + delay);
    robot.moveMouse(x + 3 * Math.random() - 3, y + 3 * Math.random() - 3);
}

const keyAndWait = (key, delay) => {
    robot.setKeyboardDelay(Math.random() * 3000 + delay);
    robot.keyTap(key);
}

const script = (runs) => {
    for (let i = 0; i < runs; i++) {
        console.log(`Smith run no: ${i+1}/${runs}`);
        moveClick(3520, 489);
        moveClick(3520, 489);
        moveClickAndWait(3520, 489, 2500);
        keyAndWait('space', 2500);
    
        moveRightClick(3519, 520)
        moveClickAndWait(3520, 593, 2500);
        keyAndWait('space', 2500);
    
        moveRightClick(3519, 520)
        moveClickAndWait(3520, 593, 2500);
        keyAndWait('space', 2500);
    
        moveRightClick(3519, 520)
        moveClickAndWait(3520, 593, 2500);
        keyAndWait('space', 2500);
    
        moveRightClick(3519, 520)
        moveClickAndWait(3520, 593, 2500);
        keyAndWait('space', 2500);
    
        moveClick(3520, 655);
        moveClickAndWait(3520, 655, 210000);
    }
}

module.exports = script;