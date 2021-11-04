const { moveClickAndWait, keyAndWait, Coords } = require('../core');

module.exports = (x) => {
    const runs = x;
    const bank = new Coords(1635, 1908);
    const bankBow = new Coords(1382, 1588);
    const bankString = new Coords(1432, 1588);
    const bankAll = new Coords(1737, 2150);
    const bagWood = new Coords(2197, 2060);
    const bagString = new Coords(2197, 2205);

    for (let i = 0; i < runs; i++) {
        console.log(`Cut longbow run no: ${i + 1}/${runs}`);
        moveClickAndWait(bank, 1300);
        moveClickAndWait(bankAll, 500);
        moveClickAndWait(bankBow, 500);
        moveClickAndWait(bankString, 1000);
        keyAndWait('escape', 1300);
        moveClickAndWait(bagWood, 500);
        moveClickAndWait(bagString, 1200);
        keyAndWait('space', 17000);
    }
}
