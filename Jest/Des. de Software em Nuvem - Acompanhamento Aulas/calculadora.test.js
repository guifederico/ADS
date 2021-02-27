const calc = require('./calculadora');

test('Somar 1 e 2 é igual a 3', () => {    
    //Arrange -> Organizar / Estruturar o que será testado
    const num1 = 1;
    const num2 = 2;
    const expected = 3;

    // Act -> Executar o alvo
    const soma = calc.somar(num1, num2);

    //Assert -> Verificar se o resultado é o esperado
    expect(soma).toBe(expected);

});

test('Somar 1.2 e 2.3 é igual a 3.5', () => {
    const soma = calc.somar(1.2, 2.3);
    expect(soma).toBe(3.5);
});

test('Somar valores texto', () => {
    const soma = calc.somar('1', '2');
    expect(soma).toBe(3);
});