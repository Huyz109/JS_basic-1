const repeatString = (str, n) => {
    let result
    if (n < 1) {
        console.log("n must be > 1")
        result = false
    }
    else {
        const str2 = str + '-'
        const result  = str2.repeat(n-1) + str
        console.log(result);
    }
    return result;
}

repeatString("a", 5)