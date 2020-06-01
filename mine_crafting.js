const robot = require("robotjs");

while(true) {
    console.log("Go to mine")
    let x = 1615;
    y = 690;

    robot.setMouseDelay(200);
    robot.moveMouse(x - 3 + 6 * Math.random(), y - 3 + 6 * Math.random());
    robot.mouseClick();
    robot.moveMouse(x - 3 + 6 * Math.random(), y - 3 + 6 * Math.random());
    robot.mouseClick();
    robot.moveMouse(x - 3 + 6 * Math.random(), y - 3 + 6 * Math.random());

    robot.setMouseDelay(45000);
    robot.mouseClick();

    x = 922;
    y = 535;
    robot.setMouseDelay(200);
    robot.moveMouse(x - 3 + 6 * Math.random(), y - 3 + 6 * Math.random());
    console.log("2nd mine")
    robot.setMouseDelay(45000);
    robot.mouseClick();

    console.log("Back to furname")
    robot.setMouseDelay(200);
    x = 299;
    y = 410;
    robot.moveMouse(x - 3 + 6 * Math.random(), y - 3 + 6 * Math.random());
    robot.setMouseDelay(7000);
    robot.mouseClick();

    console.log("Store")
    robot.setMouseDelay(200);
    x = 511;
    y = 611;
    robot.moveMouse(x - 3 + 6 * Math.random(), y - 3 + 6 * Math.random());
    robot.setMouseDelay(3000);
    robot.mouseClick();
}
