const { moveClickAndWait, keyAndWait, Coords } = require('../core');

module.exports = (x) => {
    const runs = x;
    const bank = new Coords(1635, 1908);
    const bankWood = new Coords(1380, 1588);
    const bagWood = new Coords(2237, 2060);
    const knife = new Coords(2197, 2060);

    for (let i = 0; i < runs; i++) {
        console.log(`Cut longbow run no: ${i + 1}/${runs}`);
        moveClickAndWait(bank, 1300);
        moveClickAndWait(bagWood, 500);
        moveClickAndWait(bankWood, 1000);
        keyAndWait('escape', 1300);
        moveClickAndWait(knife, 500);
        moveClickAndWait(bagWood, 1200);
        keyAndWait('3', 50000);
    }
}
