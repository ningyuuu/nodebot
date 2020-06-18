const robot = require("robotjs");

module.exports = (x) => {
    const smeltRuns = x; 
    const smeltX = 3583;
    const smeltY = 762; 
    
    for (let i = 0; i < smeltRuns; i++) {
        console.log(`Smelt run no: ${i+1}/${smeltRuns}`);
        robot.setMouseDelay(Math.random() * 10 + 100);
        robot.moveMouse(smeltX + 100 * Math.random() - 50, smeltY + 100 * Math.random() - 50);
        robot.mouseClick();
        robot.moveMouse(smeltX + 100 * Math.random() - 50, smeltY + 100 * Math.random() - 50);
        robot.mouseClick();
        robot.setMouseDelay(Math.random() * 500 + 1500);
        robot.moveMouse(smeltX + 100 * Math.random() - 50, smeltY + 100 * Math.random() - 50);
        robot.mouseClick();
        robot.setKeyboardDelay(Math.random() * 5000 + 115000);
        robot.keyTap("space");
    }
}
