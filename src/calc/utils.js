function extractNumsFrom(str) {
    const delimiters = [',', '\n'];
    const delimiterPrefix = '//';
    const delimiterSuffix = '\n';
    
    // un-escape the escaped newline characters entered through input field
    let parsedStr = str.replace(/\\n/g, '\n');
    
    if (parsedStr.startsWith(delimiterPrefix)) {
        // remove delimiter prefix
        parsedStr = parsedStr.slice(delimiterPrefix.length);
        const delimiterSuffixIndex = parsedStr.indexOf(delimiterSuffix);
        // split into 2 parts, before & after the delimiter suffix
        const customDelimiter = parsedStr.slice(0, delimiterSuffixIndex);
        parsedStr = parsedStr.slice(delimiterSuffixIndex + 1);
        // handle special case for delimiter clashing with negative sign
        if (customDelimiter.endsWith('-')) {
            // prefix 0 for handling case where the first number is negative
            parsedStr = ('0' + customDelimiter + parsedStr);
            parsedStr = (
                parsedStr
                .replace(new RegExp(customDelimiter, 'g'), ',')
                .replace(new RegExp(',,', 'g'), ',-')
            );
        }
        if (!delimiters.includes(customDelimiter)) {
            delimiters.push(customDelimiter);
        }
    }

    const numList = [];
    let currentNum = '';
    for (const char of parsedStr) {
        const charCode = char.charCodeAt();
        const isNum = (charCode > 47 && charCode < 58);
        const beginNegative = (char === '-' && !currentNum);
        if (isNum || beginNegative)
            currentNum += char;
        else if (delimiters.includes(char)) {
            numList.push(currentNum);
            currentNum = '';
        }
    }
    if (currentNum) numList.push(currentNum);

    return numList;
}

export { extractNumsFrom };
