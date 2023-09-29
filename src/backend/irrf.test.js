const irrf = require('./irrf')

describe('[Obter faixas IRRF]', () => {
    test('deve retornar 05 elementos', () => {
        const faixas = irrf.obterFaixas();
        expect(faixas.length).toEqual(5);
    });
});

describe('[Encontrar aliquota IRRF]', () => {
    test('deve retornar zero', () => {
        const faixas = irrf.obterFaixas();
        const result = irrf.faixaContemplaValor(100, faixas[0]);
        expect(result).toEqual(true);
    });
});

describe('[Calcular desconto IRRF]', () => {
    test('deve calcular o desconto corretamente para o salário-base 2722.61', () => {
        const salarioBase = 2722.61;
        const descontoEsperado = 45.80;
        const descontoCalculado = irrf.calculardesconto(salarioBase);
        expect(descontoCalculado).toEqual(descontoEsperado);
    });
});

;
