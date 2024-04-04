const checkUpperCase = str => {
    let result = true;
    for(let i = 0; i < str.length ; i++) {
        const char = str.charAt(i);
        if(char !== char.toUpperCase()) {
            result = false;
            break;
        }
    }
    console.log(result);
    return result;
}

checkUpperCase("abc")