import { extractNumsFrom } from './utils'

function add(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Only a string is allowed');
    }
    let sum = 0;
    const numbers = extractNumsFrom(str);
    const negativeNumbers = numbers.filter(n => Number(n) < 0);
    if (negativeNumbers.length) {
        throw new RangeError(`Negative numbers not allowed: ${negativeNumbers}`);
    }
    sum = numbers.reduce((prev, curr) => prev + Number(curr), 0);
    return sum;
}

export default add;
