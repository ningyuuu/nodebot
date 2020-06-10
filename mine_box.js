const robot = require("robotjs");

module.exports = (x) => {
    let mineClicks = 1;
    while(true) {
        console.log(`MINE ${mineClicks}!`)

        robot.setMouseDelay(300);
        robot.moveMouse(3640 + 3 * Math.random() - 3, 527 + 3 * Math.random() - 3);
        robot.mouseClick();
        
        robot.moveMouse(3640 + 3 * Math.random() - 3, 527 + 3 * Math.random() - 3);
        robot.setMouseDelay(Math.random() * 3000 + 15000);
        robot.mouseClick();
    
        mineClicks++;
        if (mineClicks > 10) {
            console.log("ORE BOX!")
            robot.setMouseDelay(300);
            robot.moveMouse(4312 + 1 * Math.random() - 1, 392 + 1 * Math.random() - 1);
            robot.mouseClick();

            robot.moveMouse(4312 + 1 * Math.random() - 1, 392 + 1 * Math.random() - 1);
            robot.setMouseDelay(Math.random() * 1000 + 2000);
            robot.mouseClick();
            mineClicks = 1;
        }
    }
}