const robot = require("robotjs");

const smeltRuns = 30;

const smeltX = 871;
const smeltY = 679;

for (let i = 0; i < smeltRuns; i++) {
    console.log(`Smelt run no: ${i+1}/${smeltRuns}`);
    robot.setMouseDelay(Math.random() * 10 + 100);
    robot.moveMouse(smeltX + 3 * Math.random() - 3, smeltY + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.moveMouse(smeltX + 3 * Math.random() - 3, smeltY + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.setMouseDelay(Math.random() * 500 + 1500);
    robot.moveMouse(smeltX + 3 * Math.random() - 3, smeltY + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.setKeyboardDelay(Math.random() * 5000 + 110000);
    robot.keyTap("space");
}
