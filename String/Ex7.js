const reverseStrin = str => {
    const result =  str.split('').reverse().join(''); 
    return result;
}

const checkPalindrome = str => {
    const convertStr = str.split(' ').join('').toLowerCase();
    const result = convertStr === reverseStrin(convertStr); 
    console.log(result);
    return result;
}

checkPalindrome("Race car")