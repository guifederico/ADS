const calc = require('./calculadora');

test('Somar 1 e 2 é igual a 3', () => {
    const soma = calc.somar(1, 2);
    expect(soma).toBe(3);
});

test('Somar 1.2 e 2.3 é igual a 3.5', () => {
    const soma = calc.somar(1.2, 2.3);
    expect(soma).toBe(3.5);
});

test('Somar valores texto', () => {
    const soma = calc.somar('1', '2');
    expect(soma).toBe(3);
});