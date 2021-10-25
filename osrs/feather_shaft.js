const { moveClickAndWait, keyAndWait, Coords } = require('../core');

module.exports = (x) => {
    const runs = x;
    const shaft = Coords(1240, 617);
    const feather = Coords(1278, 614);

    for (let i = 0; i < runs; i++) {
        console.log(`Feathering run no: ${i + 1}/${runs}`);
        moveClickAndWait(shaft, 1000);
        moveClickAndWait(feather, 1500);
        keyAndWait('space', 12000);
    }
}
