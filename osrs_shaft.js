const { moveClickAndWait, keyAndWait, moveClick } = require('./core');

module.exports = (x) => {
    const runs = x;
    const shaftX = 1240;
    const shaftY = 617;

    const featherX = 1278;
    const featherY = 614;

    for (let i = 0; i < runs; i++) {
        console.log(`Feathering run no: ${i + 1}/${runs}`);
        moveClickAndWait(shaftX, shaftY, 1000);
        moveClickAndWait(featherX, featherY, 1500);
        keyAndWait('space', 12000);
    }
}
