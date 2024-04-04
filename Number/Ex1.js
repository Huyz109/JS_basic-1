const volumeSphere = r => {
    const result = 4/3 * Math.PI * Math.pow(r, 3);
    console.log(result);
    return result;
}

volumeSphere(3);