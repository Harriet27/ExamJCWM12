function cekKoin (koin) {
    let result = [];
    const coins = [25, 10, 5, 1];
    for (var coin of coins) {
        while (koin >= coin) {
            result.push(coin);
            koin -= coin;
        }
    }
    var count = result.length;
    return count;
}
console.log(cekKoin(49));
console.log(cekKoin(31));
console.log(cekKoin(50));