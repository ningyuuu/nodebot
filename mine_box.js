const robot = require("robotjs");

let mineClicks = 0

while(true) {
    robot.moveMouse(3640 + 3 * Math.random() - 3, 527 + 3 * Math.random() - 3);
    console.log(`MINE ${mineClicks + 1}!`)
    robot.setMouseDelay(Math.random() * 5000 + 10000);
    robot.mouseClick();
    robot.setMouseDelay(300);

    mineClicks++;

    if (mineClicks > 20) {
        robot.moveMouse(4345 + 1 * Math.random() - 1, 352 + 1 * Math.random() - 1);
        robot.setMouseDelay(Math.random() * 1000 + 2000);
        console.log("ORE BOX!")
        robot.mouseClick();
        robot.setMouseDelay(300);
        mineClicks = 0;
    }
}