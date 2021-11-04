const { moveClickAndWait, Coords } = require('../core');

module.exports = (x) => {
    const runs = x;
    const teleGrab = new Coords(2316, 2095);
    const wine = new Coords(1419, 1954);

    for (let i = 0; i < runs; i++) {
        console.log(`Collecting wine run no: ${i + 1}/${runs}`);
        moveClickAndWait(teleGrab, 1000);
        moveClickAndWait(wine, 35000);
    }
}
