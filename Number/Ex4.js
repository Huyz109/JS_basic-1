const checkPrimeNumber = num => {
    let result = true
    if(num === 0 || num === 1) result = false
    if(num > 3) {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                result = false;
                break;
            }
        }
    }
    return result
}

const sumPrime = num => {
    let result = 0
    for(let i = 0; i <= num ; i++) {
        if(checkPrimeNumber(i)) {
            result += i;
        }
    }
    console.log(result);
    return result;
}

sumPrime(9)