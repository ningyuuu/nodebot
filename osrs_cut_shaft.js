const { moveClickAndWait, keyAndWait, moveClick } = require('./core');

module.exports = (x) => {
    const runs = x;
    const bankX = 920;
    const bankY = 482;

    const willowX = 667;
    const willowY = 149;

    const knifeX = 1278;
    const knifeY = 614;

    const woodX = 1319;
    const woodY = 615;

    for (let i = 0; i < runs; i++) {
        console.log(`Feathering run no: ${i + 1}/${runs}`);
        moveClickAndWait(bankX, bankY, 1300);
        moveClickAndWait(willowX, willowY, 1000);
        keyAndWait('escape', 1300);
        moveClickAndWait(knifeX, knifeY, 1200);
        moveClickAndWait(woodX, woodY, 1200);
        keyAndWait('space', 60000);
    }
}
