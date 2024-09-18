function add(str) {
    let sum = 0;
    let numbers = extractNumsFrom(str);
    sum = numbers.reduce((prev, curr) => prev + Number(curr), 0);
    return sum;

    function extractNumsFrom(str) {
        const delimiters = [',', '\n'];
        const numList = [];
        let currentNum = '';
        for (const char of str) {
            const charCode = char.charCodeAt();
            const isNum = (charCode > 47 && charCode < 58);
            if (isNum) currentNum += char;
            else if (delimiters.includes(char)) {
                numList.push(currentNum);
                currentNum = '';
            }
        }
        if (currentNum) numList.push(currentNum);
        return numList;
    }
}

module.exports = { add };