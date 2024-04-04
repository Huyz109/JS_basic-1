const sumDivisor = num => {
    let result = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            result += i + (num/i);
        }
    }
    console.log(result);
    return result;
}

sumDivisor(8)