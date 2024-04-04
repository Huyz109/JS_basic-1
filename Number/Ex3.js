const checkPrimeNumber = num => {
    let result = true
    if(num > 3) {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                result = false;
                break;
            }
        }
    }
    console.log(result)
    return result
}

checkPrimeNumber(4)