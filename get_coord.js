const robot = require("robotjs");

module.exports = () => {
    const coords = robot.getMousePos();
    console.log(coords.x, coords.y);
    return `${coords.x}, ${coords.y}`;
}
