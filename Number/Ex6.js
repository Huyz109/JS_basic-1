const arrangeDigit = num => {
    const digits = num.toString().split('').sort();
    const result = Number(digits.join(''));
    console.log(result);
    return result;
}

arrangeDigit(53751)