const robot = require("robotjs");

const runs = 178;

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

const bankX = 3520;
const bankY = 296;

const itemX = 4449;
const itemY = 612;
 
module.exports = (x) => {
    for (let i = 0; i < runs; i++) {
        console.log(`Clean herb run no: ${i+1}/${runs}`);
        moveClick(bankX, bankY);
        moveClick(bankX, bankY);
        moveClickAndWait(bankX, bankY, 2000);
        keyAndWait('f2', 2000);
        moveClickAndWait(4449, 612, 200);
        keyAndWait('space', 200);
        keyAndWait('space', 200);
        keyAndWait('space', 200);
        keyAndWait('space', 200);
        keyAndWait('space', 200);
        keyAndWait('space', 200);
        keyAndWait('space', 19000);
    }
}
