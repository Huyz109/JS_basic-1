const volumeSphere = r => {
    let result
    if (r >= 0) {
        result = 4/3 * Math.PI * Math.pow(r, 3);
        console.log(result);
    }
    else {
        result = undefined
    }
    return result;
}

volumeSphere(3);