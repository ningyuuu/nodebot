const robot = require("robotjs");

const fletchRuns = 6;

for (let i = 0; i < fletchRuns; i++) {
    console.log(`Fletch run no: ${i+1}/${fletchRuns}`);
    robot.setMouseDelay(100);
    robot.moveMouse(3346 + 3 * Math.random() - 3, 379 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.moveMouse(3346 + 3 * Math.random() - 3, 379 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.moveMouse(3346 + 3 * Math.random() - 3, 379 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.setKeyboardDelay(2000);
    robot.keyTap("space");
    robot.keyTap("f5");
    robot.setMouseDelay(2000);
    robot.moveMouse(4348 + 3 * Math.random() - 3, 347 + 3 * Math.random() - 3);
    robot.mouseClick();
    robot.setKeyboardDelay(Math.random() * 3000 + 20000); 
    robot.keyTap("space");
}


/*

[[1, 2, 1, 2, 2, 1, 2, 1, 3, 1],
[2, 2, 1, 2, 2, 1, 2, 1, 3, 1],
[1, 1, 1, 1, 1, 1, 2, 1, 3, 2],
[5, 2, 3, 2, 2, 1, 2, 1, 3, 1],
[5, 2, 3, 3, 2, 1, 2, 1, 3, 1],
[5, 2, 2, 3, 2, 1, 2, 1, 2, 1],
[5, 2, 4, 3, 3, 1, 2, 1, 2, 1],
[2, 2, 4, 4, 4, 1, 1, 1, 2, 3]] 

*/