const reverseStrin = str => {
    const result =  str.split('').reverse().join(''); 
    console.log(result);
    return result;
}

reverseStrin("Hello")