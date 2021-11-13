let lastStop = [[5, 0], [5, 2], [4, 6]];
function peopleOnTheBus(lastStop) {
    let total = 0;
    for (let i = 0; i < lastStop.length; i++) {
        const stop = lastStop[i];
        total += stop[0] - stop[1];
    }
    return total;
}

console.log(peopleOnTheBus(lastStop))
