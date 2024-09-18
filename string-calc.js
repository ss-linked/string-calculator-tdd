function add(str) {
    let sum = 0;
    let numbers = extractNumsFrom(str);
    sum = numbers.reduce((prev, curr) => prev + Number(curr), 0);
    return sum;

    function extractNumsFrom(str) {
        const delimiters = [',', '\n'];
        const delimiterPrefix = '//';
        const delimiterSuffix = '\n';
        let parsedStr = str;
        
        if (str.startsWith(delimiterPrefix)) {
            // remove delimiter prefix
            parsedStr = str.slice(delimiterPrefix.length);
            const delimiterSuffixIndex = parsedStr.indexOf(delimiterSuffix);
            // split into 2 parts, before & after the delimiter suffix
            const customDelimiter = parsedStr.slice(0, delimiterSuffixIndex);
            parsedStr = parsedStr.slice(delimiterSuffixIndex + 1);
            delimiters.push(customDelimiter);
        }

        const numList = [];
        let currentNum = '';
        for (const char of parsedStr) {
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