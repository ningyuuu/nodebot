const robot = require("robotjs");

const smeltRuns = 100;

for (let i = 0; i < smeltRuns; i++) {
    console.log(`Smelt run no: ${i+1}/${smeltRuns}`);
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(3641 + 3 * Math.random() - 3, 725 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.moveMouse(3641 + 3 * Math.random() - 3, 725 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.setMouseDelay(Math.random() * 500 + 1500);
    robot.moveMouse(3641 + 3 * Math.random() - 3, 725 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.setKeyboardDelay(Math.random() * 5000 + 155000);
    robot.keyTap("space");
}
