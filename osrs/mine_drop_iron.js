const { moveClickAndWait, keyToggleAndWait, Coords } = require('../core');

module.exports = (x) => {
    const runs = x;
    const iron1 = new Coords(2516, 570);
    const iron2 = new Coords(2526, 1220);
    const item1 = new Coords(2996, 1163);
    const item2 = new Coords(3038, 1164);

    for (let i = 0; i < runs * 30; i++) {
        console.log(`Collecting wine run no: ${i + 1}/${runs}`);
        moveClickAndWait(iron1, 4000);
        moveClickAndWait(iron2, 3000);

        keyToggleAndWait('shift', 'down', 500)
        moveClickAndWait(item1, 500);
        moveClickAndWait(item2, 1000);
        keyToggleAndWait('shift', 'up', 500)
    }
}
