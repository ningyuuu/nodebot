const robot = require("robotjs");

module.exports = (x) => {
    
    while (true) {
        console.log("spacebar");
        robot.setKeyboardDelay(Math.random() * 5000 + 250000);
        robot.keyTap("space");
    }
}
