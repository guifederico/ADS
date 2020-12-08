function mdc(m, n) {
    let num = 0;
    m = parseInt(m);
    n = parseInt(n);

    num = Math.min(m, n);

    while (m % num !=0 || n % num !=0) {
        num--;
    }

    return num;
}

console.log(mdc(8,4));
