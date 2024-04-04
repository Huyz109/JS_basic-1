const checkStringExist = (str1, str2) => {
    const words = str1.split(' ');
    const result =  words.includes(str2);
    console.log(result);
    return result;
}

checkStringExist("Amela A Beta", "B")

