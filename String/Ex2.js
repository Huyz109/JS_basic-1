const shortenString = (str) => {
    const result = str.slice(0, 8) + "..."
    console.log(result)
    return result
}

shortenString("Xin chào các bạn")