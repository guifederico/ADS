function ehprimo(p) {
    for (var i = 2; i < p; i++) {
        if (p % i == 0) {
            return false;
        }
    }
    return p !== 1;
}

for (let i = 1; i < 10; i++) {
    console.log(`${i} é primo? ${ehprimo(i)}`);
}