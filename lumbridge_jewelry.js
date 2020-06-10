const robot = require("robotjs");

const craftRuns = 18;

const moveClickAndWait = (x, y, delay) => {
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(x + 3 * Math.random() - 3, y + 3 * Math.random() - 3);
    robot.setMouseDelay(Math.random() * 10 + delay);
    robot.mouseClick();
}

const moveClick = (x, y) => {
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(x + 3 * Math.random() - 3, y + 3 * Math.random() - 3);
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.mouseClick();
}

const keyAndWait = (key, delay) => {
    robot.setKeyboardDelay(Math.random() * 3000 + delay);
    robot.keyTap(key);
}

for (let i = 0; i < craftRuns; i++) {
    console.log(`Craft run no: ${i+1}/${craftRuns}`);
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(2953 + 3 * Math.random() - 3, 505 + 3 * Math.random() - 3);
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.mouseClick();

    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(2953 + 3 * Math.random() - 3, 505 + 3 * Math.random() - 3);
    robot.setMouseDelay(Math.random() * 10 + 8000);
    robot.mouseClick();

    robot.setKeyboardDelay(Math.random() * 10 + 2000);
    robot.keyTap("f2");

    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(4243 + 3 * Math.random() - 3, 606 + 3 * Math.random() - 3);
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.mouseClick();

    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(4243 + 3 * Math.random() - 3, 606 + 3 * Math.random() - 3);
    robot.setMouseDelay(Math.random() * 10 + 8000);
    robot.mouseClick();

    robot.setKeyboardDelay(Math.random() * 3000 + 53000);
    robot.keyTap("space");
}
