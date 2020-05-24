const robot = require("robotjs");

robot.setMouseDelay(200);
robot.setMouseDelay(100);

while (true) {
    robot.mouseClick();
    robot.keyTap("pageup");
    robot.keyTap("pagedown");
    robot.keyTap("pageup");
    robot.keyTap("pagedown");
    robot.keyTap("pageup");
    robot.keyTap("pagedown");
    robot.keyTap("pageup");
    robot.keyTap("pagedown");
}