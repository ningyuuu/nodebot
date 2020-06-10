const robot = require("robotjs");



module.exports = (x) => {
    const fightX = 3900;
    const fightY = 270;

    const bankX = 4343;
    const bankY = 101;

    robot.setMouseDelay(200);
    robot.setMouseDelay(100);
    while (true) {
        robot.setMouseDelay(100);
        robot.moveMouse(bankX, bankY);
        robot.mouseClick();
        robot.moveMouse(bankX + 2, bankY + 2);
        robot.moveMouse(bankX, bankY);
        robot.setMouseDelay(Math.random() * 10 + 30000);
        robot.mouseClick();
        console.log("MOVED TO BANK")
    
        robot.setMouseDelay(100);
        robot.moveMouse(fightX, fightY);
        console.log("MOVED TO FIGHT")
        robot.mouseClick();
        robot.setMouseDelay(Math.random() * 10000 + 200000);
        robot.mouseClick();
    
    }
}