const robot = require("robotjs");

module.exports = () => {
    const coords = robot.getMousePos();
    return `${coords.x}, ${coords.y}`;
}
