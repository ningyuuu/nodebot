const robot = require("robotjs");

robot.setMouseDelay(200);
robot.setMouseDelay(100);

while (true) {
    robot.setMouseDelay(100);
    robot.moveMouse(1544, 104);
    robot.mouseClick();
    robot.moveMouse(1548, 109);
    robot.moveMouse(1544, 104);
    robot.setMouseDelay(Math.random() * 10 + 30000);
    robot.mouseClick();
    console.log("MOVED TO BANK")

    robot.setMouseDelay(100);
    robot.moveMouse(1098, 267);
    console.log("MOVED TO FIGHT")
    robot.mouseClick();
    robot.setMouseDelay(Math.random() * 100000 + 250000);
    robot.mouseClick();

}
