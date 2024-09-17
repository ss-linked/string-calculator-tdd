function add(str) {
    let sum = 0;
    const delimiter = ',';
    const numbers = str.split(delimiter);
    sum = numbers.reduce((prev, curr) => Number(prev) + Number(curr), 0);
    return sum;
}

module.exports = { add };