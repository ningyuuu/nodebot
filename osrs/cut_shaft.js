const { moveClickAndWait, keyAndWait, Coords } = require('../core');

module.exports = (x) => {
    const runs = x;
    const bank = new Coords(920, 482);
    const willow = new Coords(667, 149);
    const wood = new Coords(1319, 615);
    const knife = new Coords(1278, 614);

    for (let i = 0; i < runs; i++) {
        console.log(`Feathering run no: ${i + 1}/${runs}`);
        moveClickAndWait(bank, 1300);
        moveClickAndWait(willow, 1000);
        keyAndWait('escape', 1300);
        moveClickAndWait(knife, 1200);
        moveClickAndWait(wood, 1200);
        keyAndWait('space', 60000);
    }
}
