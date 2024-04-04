const repeatString = str => {
    const str2 = str + '-'
    const result  = str2.repeat(9) + str
    console.log(result);
    return result;
}

repeatString("a")