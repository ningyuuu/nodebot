const robot = require("robotjs");

const smeltRuns = 30;

for (let i = 0; i < smeltRuns; i++) {
    console.log(`Smelt run no: ${i+1}/${smeltRuns}`);
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(3529 + 3 * Math.random() - 3, 463 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.moveMouse(3529 + 3 * Math.random() - 3, 463 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.setMouseDelay(Math.random() * 500 + 1500);
    robot.moveMouse(3529 + 3 * Math.random() - 3, 463 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.setKeyboardDelay(Math.random() * 5000 + 110000);
    robot.keyTap("space");
}