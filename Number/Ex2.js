const sumBetween = (a, b) => { 
    if(a > b) {
        const temp = a;
        a = b;
        b = temp;
    }
    let result = 0;
    for(let i = a + 1 ;i < b; i++) {
        result += i;
    }
    console.log(result)
    return result
}

sumBetween(8, 3)