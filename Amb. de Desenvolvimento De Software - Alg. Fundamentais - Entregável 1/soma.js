function soma(numeros) {
    var soma = 0;
    for (var num of numeros) {
        soma += num;
    }
    return soma;
}

console.log(soma([1, 2, 3, 4, 5]));